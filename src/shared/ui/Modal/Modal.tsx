import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    FC, PropsWithChildren, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { ANIMATION_DELAY_MEDIUM } from 'shared/const/const';
import cls from './Modal.module.scss';

interface ModalProps extends PropsWithChildren {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;
    const [isMounted, setIsMounted] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsOpened(false);

            timerRef.current = setTimeout(() => {
                onClose();
                setIsMounted(false);
            }, ANIMATION_DELAY_MEDIUM);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpened,
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        setIsMounted(isOpen);

        if (isMounted) {
            setIsOpened(true);
        }
    }, [isMounted, isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                data-testid="modal"
                className={classNames(cls.Modal, mods)}
            >
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={classNames(cls.content, {}, [className])}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

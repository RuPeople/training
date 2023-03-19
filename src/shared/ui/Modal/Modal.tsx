import { classNames } from 'shared/lib/classNames/classNames';
import { FC, PropsWithChildren } from 'react';
import cls from './Modal.module.scss';

interface ModalProps extends PropsWithChildren {
    className?: string
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children } = props;

    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

type PropsT = {
    className?: string
};

export const Navbar = ({ className }: PropsT) => {
    const { t } = useTranslation('header');
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onToggleModal}>
                {t('Log in')}
            </Button>
            <Modal
                className={cls.authModal}
                isOpen={isAuthModal}
                onClose={() => setIsAuthModal(false)}
            />
        </header>
    );
};

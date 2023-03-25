import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

type PropsT = {
    className?: string
};

export const Navbar = ({ className }: PropsT) => {
    const { t } = useTranslation('header');
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpenModal}>
                {t('Log in')}
            </Button>
            <LoginModal
                className={cls.authModal}
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
};

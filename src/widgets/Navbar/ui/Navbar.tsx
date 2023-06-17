import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/store/useAppDispatch';
import cls from './Navbar.module.scss';

type PropsT = {
    className?: string
};

export const Navbar = ({ className }: PropsT) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const isUserAuth = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (isUserAuth) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onLogout}
                >
                    {t('Log out', { ns: 'header' })}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onOpenModal}>
                {t('Log in', { ns: 'header' })}
            </Button>
            <LoginModal
                className={cls.authModal}
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
};

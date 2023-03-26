import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/store/useAppDispatch';
import { Loader, LoaderSize, LoaderTheme } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Title/Text';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('login');
    const dispatch = useAppDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text className={cls.title} as="h4">{t('Log in')}</Text>
            <Input
                placeholder={t('Username')}
                name="username"
                type="text"
                onChange={onChangeUsername}
                value={username}
                disabled={isLoading}
                withButton
                autoFocus
            />
            <Input
                placeholder={t('Password')}
                name="password"
                type="password"
                onChange={onChangePassword}
                value={password}
                disabled={isLoading}
                withButton
            />
            {error && <Text as="p" theme={TextTheme.DANGER}>{error}</Text>}
            <Button
                onClick={onClickLogin}
                disabled={isLoading}
                icon={isLoading && <Loader theme={LoaderTheme.SECONDARY} size={LoaderSize.M} />}
                className={cls.button}
            >
                {!isLoading && t('Log in')}
            </Button>
        </div>
    );
});

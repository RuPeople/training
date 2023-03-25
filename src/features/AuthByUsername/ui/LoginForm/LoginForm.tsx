import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Username')}
                name="username"
                type="text"
                onChange={(e) => setUsername(e)}
                value={username}
                withButton
                autoFocus
            />
            <Input
                placeholder={t('Password')}
                name="password"
                type="password"
                onChange={(e) => setPassword(e)}
                value={password}
                withButton
            />
            <Button>
                {t('login')}
            </Button>
        </div>
    );
};

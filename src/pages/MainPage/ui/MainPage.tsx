import { useTranslation } from 'react-i18next';
import { ErrorBoundaryButton } from 'widgets/ErrorBoundaryButton';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const handleOnInputChange = (val:string) => {
        setValue(val);
    };

    return (
        <div className={classNames(cls.MainPage)}>
            {t('Main Page')}
            <ErrorBoundaryButton />
            <Counter />
            <Input
                name="test"
                onChange={handleOnInputChange}
                value={value}
                placeholder="Введите текст"
            />
        </div>
    );
};

export default MainPage;

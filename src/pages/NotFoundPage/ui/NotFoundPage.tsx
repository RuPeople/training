import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation('NotFoundPage');

    return (
        <div className={classNames(cls.NotFoundPage)}>
            {t('NotFoundPage')}
        </div>
    );
};

export default NotFoundPage;

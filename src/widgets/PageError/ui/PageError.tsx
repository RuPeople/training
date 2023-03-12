import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('pageError');

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1 className={classNames(cls.title)}>{t('Uncaught error')}</h1>
            <Button onClick={reloadPage}>
                {t('Reload page')}
            </Button>
        </div>
    );
};

export default PageError;

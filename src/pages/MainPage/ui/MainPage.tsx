import { useTranslation } from 'react-i18next';
import { ErrorBoundaryButton } from 'widgets/ErrorBoundaryButton';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <>
            {t('Main Page')}
            <ErrorBoundaryButton />
        </>
    );
};

export default MainPage;

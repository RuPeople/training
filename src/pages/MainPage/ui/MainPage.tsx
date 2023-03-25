import { useTranslation } from 'react-i18next';
import { ErrorBoundaryButton } from 'widgets/ErrorBoundaryButton';
import { Counter } from 'entity/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <>
            {t('Main Page')}
            <ErrorBoundaryButton />
            <Counter />
        </>
    );
};

export default MainPage;

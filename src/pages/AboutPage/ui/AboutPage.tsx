import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <>
            {t('About Page')}
            <Counter />
        </>
    );
};

export default AboutPage;

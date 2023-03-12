import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <>
            {t('About Page')}
        </>
    );
}

export default AboutPage;

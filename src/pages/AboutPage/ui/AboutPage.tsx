import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <>
            {t('AboutPage')}
        </>
    );
}

export default AboutPage;

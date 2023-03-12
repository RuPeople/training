import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const ErrorBoundaryButton = () => {
    const { t } = useTranslation('dev');
    const [hasError, setHasError] = useState(false);

    const onThrow = () => {
        setHasError(true);
    };

    useEffect(() => {
        if (hasError) {
            throw new Error();
        }
    }, [hasError]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('Throw error')}
        </Button>
    );
};

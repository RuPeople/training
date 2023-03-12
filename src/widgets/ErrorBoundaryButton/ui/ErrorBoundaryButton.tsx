import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

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

export default ErrorBoundaryButton;

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import GearShape from 'shared/assets/icons/gearshape.svg';
import { Icon, IconSize } from 'shared/ui/Icon/Icon';

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
            icon={<Icon icon={<GearShape />} size={IconSize.M} />}
        >
            {t('Throw error')}
        </Button>
    );
};

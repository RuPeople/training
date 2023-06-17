import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    disabled?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Yzbekistan, content: Country.Yzbekistan },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, disabled, onChange,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((val: string) => {
        onChange?.(val as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Country')}
            options={options}
            value={value as string}
            onChange={onChangeHandler}
            disabled={disabled}
        />
    );
});

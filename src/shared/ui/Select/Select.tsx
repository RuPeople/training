import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

export interface SelectProps {
    className?: string;
    label: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className, label, options, value, onChange, disabled,
    } = props;
    /* const { t } = useTranslation(); */

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => {
        return options.map((option) => (
            <option
                className={cls.option}
                value={option.value}
                key={option.value}
            >
                {option.content}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={handleOnChange}
                disabled={disabled}
            >
                {optionsList}
            </select>
        </div>
    );
});

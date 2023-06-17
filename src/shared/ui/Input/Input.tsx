import React, {
 InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import XMark from 'shared/assets/icons/xmark.svg';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'name' | 'placeholder' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    name: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    withButton?: boolean;
    placeholder?: string | null;
    readonly ?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        name,
        type,
        disabled = false,
        autoFocus = false,
        withButton = false,
        readonly = false,
        ...otherProps
    } = props;
    const [focus, setOnFocus] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            setOnFocus(true);

            ref.current?.focus();
        }
    }, [autoFocus, ref]);

    useEffect(() => {
        if (value) {
            setIsButtonVisible(true);
            setOnFocus(true);
        }
    }, [value]);

    const handleOnFocus = () => {
        setOnFocus(true);
    };

    const handleOnBlur = () => {
        if (!value && value !== 0) {
            setOnFocus(false);
        }
    };

    const handleClearButtonClick = () => {
        onChange?.('');
        setOnFocus(false);
    };

    const labelMods: Mods = {
        [cls.focus]: focus,
        [cls.disabled]: disabled,
    };

    const inputMods: Mods = {
        [cls.withPlaceholder]: !!placeholder,
        [cls.disabled]: disabled,
        [cls.readonly]: readonly,
    };

    return (
        <div className={cls.inputWrapper}>
            <label
                className={classNames(cls.label, labelMods)}
                htmlFor={name}
            >
                {placeholder}
            </label>
            <input
                ref={ref}
                className={
                    classNames(cls.Input, inputMods, [className])
                }
                value={value}
                id={name}
                type={type}
                readOnly={readonly}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                disabled={disabled}
                {...otherProps}
            />
            {withButton && isButtonVisible && value && (
                <Button
                    onClick={handleClearButtonClick}
                    theme={ThemeButton.CLEAR}
                    className={cls.clearButton}
                    disabled={disabled}
                    icon={<XMark />}
                />
            )}
        </div>
    );
});

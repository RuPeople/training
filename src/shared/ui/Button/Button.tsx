import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ButtonHTMLAttributes, memo,
} from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Button.module.scss';

export enum ThemeButton {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum ButtonBorderRadius {
    ROUND_S = 'round_s',
    ROUND_M = 'round_m',
    ROUND_L = 'round_l',
    ANGLED = 'angled',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    size?: ButtonSize;
    borderRadius?: ButtonBorderRadius;
    icon?: JSX.Element;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        size = ButtonSize.M,
        borderRadius = ButtonBorderRadius.ROUND_S,
        icon = false,
        disabled = false,
        ...restProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls[borderRadius]]: true,
        [cls.withIcon]: !!icon && !!children,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...restProps}
        >
            {icon && (
                <Icon icon={icon} />
            )}
            {children}
        </button>
    );
});

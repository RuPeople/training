import { classNames } from 'shared/lib/classNames/classNames';
import { cloneElement, memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string
    icon: JSX.Element
    size?: IconSize
}

export enum IconSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export const Icon = memo((props: IconProps) => {
    const {
        className, icon, size = IconSize.M,
    } = props;

    const mods: Record<string, boolean> = {
        [cls[size]]: true,
    };

    return cloneElement(
        icon,
        {
            'data-testid': 'icon',
            className: classNames(cls.Icon, mods, [className]),
        },
    );
});

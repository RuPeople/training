import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import { memo } from 'react';

interface LoaderProps {
    className?: string;
    theme?: LoaderTheme;
    size?: LoaderSize;
}

export enum LoaderTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum LoaderSize {
    M = 'size_m',
    L = 'size_l',
}

export const Loader = memo(({ className, theme, size }: LoaderProps) => {
    return (
        <div className={classNames('lds-ripple', {}, [className, theme, size])}>
            <div />
            <div />
        </div>
    );
});

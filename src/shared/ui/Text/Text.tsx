import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
    as?: keyof Pick<
        JSX.IntrinsicElements,
        'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p'
    >;
    children?: ReactNode;
    theme?: TextTheme;
}

export enum TextTheme {
    PRIMARY = 'primary',
    DANGER = 'danger',
}

export const Text = (props: TextProps) => {
    const {
        className, as: ElementType = 'p', children, theme,
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };

    return (
        <ElementType className={classNames(cls.Text, mods, [className])}>
            {children}
        </ElementType>
    );
};

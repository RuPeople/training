import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LinkProps, Link as BaseLink } from 'react-router-dom';
import cls from './Link.module.scss';

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: LinkTheme
}

export const Link = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        theme = LinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <BaseLink
            to={to}
            className={classNames(cls.Link, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </BaseLink>
    );
});

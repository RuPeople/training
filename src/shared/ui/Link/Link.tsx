import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LinkProps, Link as BaseLink } from 'react-router-dom';
import cls from './Link.module.scss';

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type PropsT = LinkProps & {
    className?: string,
    theme?: LinkTheme
};

export const Link: FC<PropsT> = (props) => {
    const {
 to, className, theme = LinkTheme.PRIMARY, children, ...otherProps
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
};

export default Link;

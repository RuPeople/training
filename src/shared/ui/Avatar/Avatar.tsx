import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    alt: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, src, alt, size = 60,
    } = props;

    const styles = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};

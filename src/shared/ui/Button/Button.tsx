import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface PropsT extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton;
}

export const Button: FC <PropsT> = (props) => {
    const {
        className,
        children,
        theme,
        ...restProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, theme])}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;
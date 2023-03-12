import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import Icon from 'shared/assets/icons/theme-switcher.svg'
import Button, {ThemeButton} from "shared/ui/Button/Button";

type PropsT = {
    className?: string
}

export const ThemeSwitcher = ({className}: PropsT) => {
    const { theme, handleSwitchTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={handleSwitchTheme}
        >
            <Icon
                width={16}
                fill={theme === Theme.LIGHT ? `var(--inverted-primary-color)`: `var(--inverted-primary-color)`}
            />
        </Button>
    );
};

export default ThemeSwitcher;
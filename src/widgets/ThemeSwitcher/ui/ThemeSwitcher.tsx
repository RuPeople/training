import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Icon from 'shared/assets/icons/theme-switcher.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, handleSwitchTheme } = useTheme();

    return (
        <button
            type="button"
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={handleSwitchTheme}
        >
            <Icon
                width={16}
                fill={theme === Theme.LIGHT
                    ? 'var(--inverted-primary-color)'
                    : 'var(--inverted-primary-color)'}
            />
        </button>
    );
};

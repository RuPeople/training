import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import Icon from 'shared/assets/icons/theme-switcher.svg';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
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
                    ? 'var(--primary-color)'
                    : 'var(--primary-color)'}
            />
        </button>
    );
});

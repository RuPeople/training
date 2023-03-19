import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

type PropsT = {
    className?: string
};

export const Navbar = ({ className }: PropsT) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
        </header>
    );
};

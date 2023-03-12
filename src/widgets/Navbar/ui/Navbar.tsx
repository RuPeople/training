import { classNames } from 'shared/lib/classNames/classNames';
import Link, { LinkTheme } from 'shared/ui/Link/Link';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

type PropsT = {
    className?: string
};

export const Navbar = ({ className }: PropsT) => {
    const { t } = useTranslation('header');

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <Link
                to="/"
                theme={LinkTheme.PRIMARY}
                className={classNames(cls.link)}
            >
                {t('Home')}
            </Link>
            <Link
                to="/about"
                theme={LinkTheme.SECONDARY}
                className={classNames(cls.link)}
            >
                {t('About')}
            </Link>
        </header>
    );
};

export default Navbar;

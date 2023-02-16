import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import Link, {LinkTheme} from "shared/ui/Link/Link";

type PropsT = {
    className?: string
}

export const Navbar = ({className}: PropsT) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Link to="/" theme={LinkTheme.PRIMARY} className={classNames(cls.link)}>Главная</Link>
            <Link to="/about" theme={LinkTheme.SECONDARY} className={classNames(cls.link)}>О сайте</Link>
        </header>
    );
};

export default Navbar;

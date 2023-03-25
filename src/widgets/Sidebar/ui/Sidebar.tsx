import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import {
 Button, ButtonBorderRadius, ButtonSize,
} from 'shared/ui/Button/Button';
import { Link } from 'shared/ui/Link/Link';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import ChevronLeft from 'shared/assets/icons/chevron.left.2.svg';
import ChevronRight from 'shared/assets/icons/chevron.right.2.svg';
import House from 'shared/assets/icons/house.svg';
import Newspaper from 'shared/assets/icons/newspaper.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                size={ButtonSize.S}
                borderRadius={ButtonBorderRadius.ANGLED}
                icon={collapsed ? <ChevronRight /> : <ChevronLeft />}
            />
            <div className={cls.links}>
                <Link
                    to={RoutePath.main}
                    className={classNames(cls.link)}
                >
                    <Icon icon={<House />} className={classNames(cls.linkIcon)} />
                    {!collapsed && t('Home')}
                </Link>
                <Link
                    to={RoutePath.about}
                    className={classNames(cls.link)}
                >
                    <Icon icon={<Newspaper />} className={classNames(cls.linkIcon)} />
                    {!collapsed && t('About')}
                </Link>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

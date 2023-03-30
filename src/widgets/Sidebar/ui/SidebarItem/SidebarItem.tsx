import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'shared/ui/Link/Link';
import { Icon } from 'shared/ui/Icon/Icon';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const { path, icon, text } = item;

    return (
        <Link
            data-testid="sidebarItem"
            to={path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed })}
        >
            <Icon icon={icon} className={classNames(cls.linkIcon)} />
            {!collapsed && t(text)}
        </Link>
    );
});

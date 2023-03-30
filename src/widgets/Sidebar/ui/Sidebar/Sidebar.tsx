import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import {
 Button, ButtonBorderRadius, ButtonSize,
} from 'shared/ui/Button/Button';
import ChevronLeft from 'shared/assets/icons/chevron.left.2.svg';
import ChevronRight from 'shared/assets/icons/chevron.right.2.svg';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const Toggle = useMemo(() => {
        return (
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                size={ButtonSize.S}
                borderRadius={ButtonBorderRadius.ANGLED}
                icon={collapsed ? <ChevronRight /> : <ChevronLeft />}
            />
        );
    }, [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            {Toggle}
            <div className={cls.links}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
});

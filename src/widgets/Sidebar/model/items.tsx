import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import House from 'shared/assets/icons/house.svg';
import Newspaper from 'shared/assets/icons/newspaper.svg';
import Person from 'shared/assets/icons/person.crop.circle.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: JSX.Element;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Home',
        icon: <House />,
    },
    {
        path: RoutePath.about,
        text: 'About',
        icon: <Newspaper />,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        icon: <Person />,
    },
];

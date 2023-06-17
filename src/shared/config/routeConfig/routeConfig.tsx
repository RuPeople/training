import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

type AppRouteProps = RouteProps & {
    isAuthOnly?: boolean;
};

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    // KEEP LAST
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.PROFILE]: '/profile',
    [Routes.NOT_FOUND]: '*',
};

export const routeConfig: Record<Routes, AppRouteProps> = {
    [Routes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [Routes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [Routes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        isAuthOnly: true,
    },
    [Routes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
};

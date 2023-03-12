import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.NOT_FOUND]: '*',
};

export const routeConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [Routes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [Routes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
};

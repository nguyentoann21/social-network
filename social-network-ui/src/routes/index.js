import { Main } from '../layouts';
import Body from '../pages/body';
import Music from '../pages/music';
import NotFound from "../pages/not-found";

const publicRoutes = [
    {
        path: "/",
        name: 'home-page',
        exact: true,
        component: Body,
        layout: Main,
    },
    {
        path: "/home",
        name: 'home-page',
        exact: true,
        component: Body,
        layout: Main,
    },
    {
        path: "/*",
        name: 'not-found-404',
        exact: false,
        component: NotFound,
        layout: Main,
    },
    {
        path: "/music",
        name: 'music-view',
        exact: true,
        component: Music,
        layout: Main,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
import {IndexPage} from "/src/1_pages/Index";
import {RouteProps} from "react-router";
import {CatalogPage} from "/src/1_pages/CatalogPage";

export enum AppRoutes {
    INDEX = 'index',
    CATALOG = 'catalog',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.CATALOG]: '/catalog',
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.index,
        element: <IndexPage />,
    },
    {
        path: RoutePath.catalog,
        element: <CatalogPage />
    }
]

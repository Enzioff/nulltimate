import {memo, Suspense} from 'react';
import {RouteProps, Route, Routes} from "react-router";
import {routeConfig} from "/src/5_shared/config";


function AppRouter() {
    return (
        <Suspense fallback={null}>
            <Routes>
                {
                    Object.values(routeConfig)
                        .map((route: RouteProps) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            />
                        ))
                }
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)

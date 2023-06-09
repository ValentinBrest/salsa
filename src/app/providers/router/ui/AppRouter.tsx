import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/router/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div style={{width: '100%'}}>{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;

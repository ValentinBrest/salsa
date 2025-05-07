import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/router/routeConfig/routeConfig';
import ScrollToTop from 'shared/ui/ScrollTop/ScrollTop';

const AppRouter = () => {
    return (
        <ScrollToTop>
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div style={{ width: '100%' }}>{element}</div>}
                    />
                ))}
            </Routes>
        </ScrollToTop>
    );
};

export default AppRouter;

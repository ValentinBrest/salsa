import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/router/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div style={{ width: '100%' }}>{element}</div>}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;

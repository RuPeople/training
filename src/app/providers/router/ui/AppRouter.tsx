import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                // eslint-disable-next-line react/jsx-no-undef
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                    path={path}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;

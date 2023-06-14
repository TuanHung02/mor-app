import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes";
import DashBoard from "../modules/DashBoard/DashBoard";
import DashBoardItem from "../modules/EvaluateProcess/pages/DashBoardItem";

function RouteRender() {
  return (
    <Routes>
      <Route index element={<DashBoard />} />

      {publicRoutes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.Component />}>
            <Route index element={<DashBoardItem />} />
            {!!route.routeChild &&
              route.routeChild.map((item, idChild) => {
                return (
                  <Route
                    key={idChild}
                    path={route.path + item.path}
                    element={<item.Component />}
                  >
                    {!!item.routeChild &&
                      item.routeChild.map((item2, idChild2) => {
                        return (
                          <Route
                            key={idChild2}
                            path={route.path + item.path + item2.path}
                            element={<item2.Component />}
                          />
                        );
                      })}
                  </Route>
                );
              })}
          </Route>
        );
      })}
    </Routes>
  );
}

export default RouteRender;

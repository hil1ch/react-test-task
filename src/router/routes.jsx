import { createBrowserRouter, Outlet } from "react-router-dom";

import { NotFoundPage } from "../pages/NotFoundPage";
import MainLayout from "../layout/MainLayout";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

import { APP_PATHS } from "../constants/paths";

export const routes = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: APP_PATHS.route.home,
        element: <ProductsPage />,
      },
      {
        path: `${APP_PATHS.route.home}/:productId`,
        element: <ProductDetailsPage />,
      },
      {
        path: APP_PATHS.route.cart,
        element: <CartPage />,
      },
    ],
  },
  {
    path: `${APP_PATHS.route.home}*`,
    element: <NotFoundPage />,
  },
]);

import CarDetail from "../pages/carDetail";
import CartPage from "../pages/cartPage";
import HomePage from "../pages/home";
import ShopPage from "../pages/shop";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/bike/:id?", component: CarDetail },
  { path: "/shop", component: ShopPage },
  { path: "/cart", component: CartPage },

  // custom 404 page if necessary
  { path: "", component: HomePage },
];

export default routes;

import { Route, Routes } from "react-router";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Registration from "../page/registration/Registration";
import NotFound from "../page/notFound/NotFound";
import Favorite from "../page/favoritePage/Favorite";
import Basket from "../page/basket/Basket";
import Product from "../page/product/Product";
const Layout = () => {
  return (
    <div className={scss.Layout}>
      <div className="containre">
        <div className={scss.Content}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;

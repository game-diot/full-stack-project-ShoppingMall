import { Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/MainLayout.jsx";

import AuthLogin from "./pages/AuthLogin/AuthLogin.jsx";
import AuthRegister from "./pages/AuthRegister/AuthRegister.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import AdminProducts from "./pages/AdminProducts/AdminProducts.jsx";
import AdminOrders from "./pages/AdminOrders/AdminOrders.jsx";
import AdminFeatures from "./pages/AdminFeatures/AdminFeatures.jsx";
import ShoppingLayout from "./layouts/ShoppingLayout.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ShoppingHome from "./pages/ShoppingHome/ShoppingHome.jsx";
import ShoppingListing from "./pages/ShoppingListing/ShoppingListing.jsx";
import ShoppingAccount from "./pages/ShoppingAccount/ShoppingAccount.jsx";
import CheckAuth from "./hoc/CheckAuth.jsx";
import UnauthPage from "./pages/UnAuth/UnAuth.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { checkAuth } from "./store/auth-slice";

import { Skeleton } from "./components/common/ui/skeleton.jsx";
import PaypalReturnPage from "./pages/ShoppingPaypalReturn/ShoppingPaypalReturn.jsx";
import PaymentSuccessPage from "./pages/ShoppingPaymentSuccess/ShoppingPaymentSuccess.jsx";
import SearchProducts from "./pages/ShoppingSearch/ShoppingSearch.jsx";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

import ProductPage from "./components/Products/ProductPage";
import { CartProvider } from "./store/cart-context";
import { CartDisplay } from "./store/cart-display-context";
import About from "./pages/About";
import RootLayout from "./components/Layout/RootLayout";
import ProfilePage from "./pages/ProfilePage";
import Contact from "./pages/Contact";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./store/auth-context";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },

        {
          path: "/store",
          element: isLoggedIn ? (
            <ProductPage />
          ) : (
            <Navigate to="/login" replace />
          ),
        },

        { path: "/about", element: <About /> },

        { path: "/contact", element: <Contact /> },

        {
          path: "/profile",
          element: isLoggedIn ? (
            <ProfilePage />
          ) : (
            <Navigate to="/login" replace />
          ),
        },

        {
          path: `/product/:id`,
          element: isLoggedIn ? (
            <ProductDetailPage />
          ) : (
            <Navigate to="/login" replace />
          ),
        },

         
         { path: "/login", element: isLoggedIn ? <Navigate to="/store" replace /> : <LoginPage /> },

         { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <CartProvider>
      <CartDisplay>
        {/* Provide the router to the app */}
        <RouterProvider router={router} />
      </CartDisplay>
    </CartProvider>
  );
}

export default App;

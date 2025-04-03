import {createBrowserRouter,RouterProvider,Navigate,} from "react-router-dom";
import { useContext,Suspense,lazy } from "react";


import { CartProvider } from "./store/cart-context";
import { CartDisplay } from "./store/cart-display-context";
import AuthContext from "./store/auth-context";

/*
import About from "./pages/About";
import RootLayout from "./components/Layout/RootLayout";
import ProfilePage from "./components/Profile/ProfilePage";
import Contact from "./pages/Contact";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import LoginPage from "./components/Auth/LoginPage";
import ProductPage from "./components/Products/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
*/

const ProductPage = lazy(() => import("./components/Products/ProductPage"));
const ProductDetailPage = lazy(() => import("./components/Products/ProductDetailPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProfilePage = lazy(() => import("./components/Profile/ProfilePage"));
const LoginPage = lazy(() => import("./components/Auth/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Home = lazy(() => import("./pages/Home"));
const RootLayout = lazy(() => import("./components/Layout/RootLayout"));

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={<div>Loading Product Page...</div>}><RootLayout /> </Suspense>,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Suspense fallback={<div>Loading Home Page...</div>}><Home /></Suspense> },

        {
          path: "/store",
          element: isLoggedIn ? (
            <Suspense fallback={<div>Loading Product Page...</div>}>
            <ProductPage />
            </Suspense>
          ) : (
            <Navigate to="/login" replace />
          ),
        },

        { path: "/about", element:<Suspense fallback={<div>Loading About Page</div>}> <About /> </Suspense>},

        { path: "/contact", element: <Suspense fallback={<div>Loading Contact Page</div>}> <Contact /></Suspense> },

        {
          path: "/profile",
          element: isLoggedIn ? (
            <Suspense fallback={<div>Loading Profile...</div>}>
            <ProfilePage />
            </Suspense>
          ) : (
            <Navigate to="/login" replace />
          ),
        },

        {
          path: `/product/:id`,
          element: isLoggedIn ? (
          <Suspense fallback={<div>Loading Product...</div>}>
            <ProductDetailPage />
            </Suspense>
          ) : (
            <Navigate to="/login" replace />
          ),
        },

         
         { path: "/login", element: isLoggedIn ? <Navigate to="/store" replace /> :
          <Suspense fallback={<div>Loading Login...</div>}> <LoginPage /> </Suspense>},

         { path: "*", element:<Suspense fallback={<div>Loading...</div>}> <NotFoundPage />  </Suspense>},
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

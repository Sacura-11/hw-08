import { Route, Routes } from "react-router-dom";
import { NotFound } from "pages/NotFound/NotFound";
import { Layout } from "./Layout/Layout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshThunk } from "redux/authSlice";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
// import { selectAuthIsLoading } from "redux/auth.selectors";

const HomePage = lazy(() => import('pages/Home/HomePage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));



export const App = () => {

  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectAuthIsLoading);
  
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>}/>
          <Route path="login" element={<RestrictedRoute><LoginPage /></RestrictedRoute>}/>
          <Route path="register" element={<RestrictedRoute><RegisterPage /></RestrictedRoute>}/>
        </Route>
      </Routes>
    </>
  );
};


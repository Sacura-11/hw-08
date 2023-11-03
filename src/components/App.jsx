import { Route, Routes } from "react-router-dom";
import { NotFound } from "pages/NotFound/NotFound";
import { Layout } from "./Layout/Layout";
import HomePage from "pages/Home/HomePage";
import ContactsPage from "pages/Contacts/ContactsPage";
import LoginPage from "pages/Login/LoginPage";
import RegisterPage from "pages/Register/RegisterPage";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};


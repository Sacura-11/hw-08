import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter'
// import { ContactList } from 'components/ContactList/ContactList'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts } from 'redux/contactsOperations'

import css from './ContactsPage.module.css';

const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <div className={css.container}>
    <h1>ContactsPage</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>

  )
}

export default ContactsPage
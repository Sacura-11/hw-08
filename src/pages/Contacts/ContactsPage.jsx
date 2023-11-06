import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter'
// import { ContactList } from 'components/ContactList/ContactList'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts } from 'redux/contactsOperations'

import css from './ContactsPage.module.css';

export const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.container}>
           <div className={css.sectionContainer}>
           <h2 className={css.title}>Add new contact</h2>
            <ContactForm />
           </div>

            <div className={css.sectionContainer}>
            <h2 className={css.title}>Contacts list</h2>
            <Filter />
            <ContactList />
            </div>
        </div>

    )
}

export default ContactsPage

import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectContacts,
    selectContactsIsLoading,
} from 'redux/contacts.selectors';
import {

    deleteContact,
    fetchContacts,
} from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

import css from './ContactList.module.css';

const getFilteredContacts = (contacts, filter) => {
    return contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
};


export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectContactsIsLoading);
    const filter = useSelector(getFilter);
    const filteredContacts = getFilteredContacts(contacts, filter);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    const onDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <div>
            {isLoading && <Loader />}
            <ul className={css.list}>
                {Array.isArray(contacts) &&
                    filteredContacts?.map(contact => {
                        return (
                            <li className={css.listItem} key={contact.id}>
                                <h3>{contact.name}</h3>
                                <div className={css.contactContainer_right}>
                                <p>{contact.number}</p>
                                <button className={css.deleteButton} onClick={() => onDeleteContact(contact.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                                </button>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
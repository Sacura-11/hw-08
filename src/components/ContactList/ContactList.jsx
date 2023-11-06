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
    // const error = useSelector(selectContactsError);
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
                                X
                                </button>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { getContacts } from 'redux/selectors';
// import { addContact } from 'redux/contactsOperations';
// import css from './ContactForm.module.css';

// const initialValues = {
//   name: '',
//   phone: '',
// };

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
  
//   const [formValues, setFormValues] = useState(initialValues);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       name: formValues.name,
//       phone: formValues.phone,
//     };

//     if (contacts.find((contact) => contact.name === newContact.name)) {
//       return alert(`${newContact.name} is already in contacts`);
//     }

//     dispatch(addContact(newContact));
//     setFormValues(initialValues); // Reset the form
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label>Name: </label>
//       <input className={css.formInput}
//         type="text"
//         name="name"
//         value={formValues.name}
//         onChange={handleInputChange}
//         required
//       />
//       <label>Number: </label>
//       <input className={css.formInput}
//         type="tel"
//         name="phone"
//         value={formValues.phone}
//         onChange={handleInputChange}
//         required
//       />
//       <button className={css.saveButton} type="submit">Save contact</button>
//     </form>
//   );
// };


import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contactsSlice';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = contact => {
    dispatch(addContact(contact));
    reset();
  };


  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.formLabel}>
          <span>Name:</span>
          <input className={css.formInput} {...register('name', { required: true })} type="text" />
          {errors.name && <span>This field is required</span>}
        </label>
        <label className={css.formLabel}>
          <span>Number:</span>
          <input className={css.formInput} {...register('number', { required: true })} type="text" />
          {errors.number && <span>This field is required</span>}
        </label>

        <button className={css.saveButton} type="submit">Add contact</button>
      </form>
    </div>
  );
};


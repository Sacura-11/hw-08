import React from 'react'
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
    <h1 className={css.title}>PhoneBook</h1>
    <p className={css.description}>Do you always forget or lose the phone numbers of friends and acquaintances? This app is your phone book that will help you keep all your important contacts in one place and have access to them from any device at any time.</p>
    </div>
  )
}

export default HomePage
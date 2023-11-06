import React from 'react'
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authSlice';

const UserMenu = () => {
    const user = useSelector(selectUserData);

    const dispatch = useDispatch();
    

    const onLogOut = () => {
        dispatch(logOutThunk());
    }

    return (
        <ul className={css.userNavList}>
            <p className={css.loginedUserTitle}>Hello, <span className={css.loginedUser}>{user}</span></p>
            <button className={css.logOutButton} onClick={onLogOut}>
                Logout
            </button>
        </ul>
    )
}

export default UserMenu
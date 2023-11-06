import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { NavItemLink } from './Navigation.styled';
import { selectAuthAuthenticated } from 'redux/auth.selectors';
// import { logOutThunk } from 'redux/authSlice';
import UserMenu from 'components/UserMenu/UserMenu';



export const Navigation = () => {

    const authenticated = useSelector(selectAuthAuthenticated);
   

    return (
        <div className={css.container}>
            <header className={css.header}>
                <nav className={css.navigationContainer}>
                    {authenticated ? (
                        <>
                            <ul className={css.navList}>
                                <NavItemLink className={css.navListItem} to="/">
                                    Home
                                </NavItemLink>
                                <NavItemLink className={css.navListItem} to="/contacts">
                                    Contacts
                                </NavItemLink>
                            </ul>
                            <UserMenu />
                        </>
                    ) : (
                        <>
                            <ul className={css.navList}>
                                <NavItemLink className={css.navListItem} to="/">
                                    <span className={css.textColor}>Home</span>
                                </NavItemLink>
                            </ul>
                            <ul className={css.userNavList}>
                                <NavItemLink className={css.navListItem} to="/register">
                                Sign Up
                                </NavItemLink>
                                <NavItemLink className={css.navListItem} to="/login">
                                    Login
                                </NavItemLink>
                            </ul>
                        </>
                    )
                    }
                </nav>
            </header>
        </div>
    );
};

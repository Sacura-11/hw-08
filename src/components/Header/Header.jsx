import css from './Header.module.css';
import { NavItemLink } from './Header.styled';

const navigationItems = [
    { href: '/', text: 'Home' },
    { href: '/contacts', text: 'Contacts' }
];

const userActions = [
    { href: '/register', text: 'Register' },
    { href: '/login', text: 'Login' },
    // { href: '/contacts', text: 'LogOut' }
];

export const Header = () => {
    return (
        <div className={css.container}>
            <header className={css.header}>
                <nav className={css.navigationContainer}>
                    <ul className={css.navList}>
                        {navigationItems.map(({ href, text }) => (
                            <li className={css.navListItem} key={href}>
                                <NavItemLink className={css.navLink} to={href} activeclassname={css.activeNavLink}>{text}</NavItemLink>
                            </li>
                        ))}
                    </ul>

                    <ul className={css.userNavList}>
                        {userActions.map(({ href, text }) => (
                            <li className={css.navListItem} key={href}>
                                <NavItemLink className={css.navLink} to={href} activeclassname={css.activeNavLink}>{text}</NavItemLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
};

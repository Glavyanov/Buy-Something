import {NavLink} from 'react-router-dom';

import './Header.css';

export const Header = () => {
    return (
        <section className="header">
            <i className="fa-regular fa-gem fa-2xl" style={{color: '#41cffd'}}></i>
            <nav>
                <ul role="list" className="navbar">
                    <li className="navbar__item">
                        <NavLink className={({isActive}) => isActive ? 'nav-active' : 'nav-non-active'} to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
};
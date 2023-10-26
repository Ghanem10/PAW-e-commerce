import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../../assets/scss/intro/_navbar.scss';

export default function Navbar(): React.JSX.Element {
    return (
        <header>
            <nav>
                <h4 tabIndex={1}>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faCartShopping} /> E-commerce
                    </Link>
                </h4>
                <ul>
                    <li tabIndex={2}><Link to={'/Products'}>Product</Link></li>
                    <li tabIndex={3}><Link to={'/Subscription'}>Subscription</Link></li>
                    <li className='intro-about-section' tabIndex={4}>About</li>
                    <p className='intro-p-about-section'>
                        Our e-commerce platform offers a vast range of products, making shopping for anything
                        you need a breeze. Explore a diverse selection of items from electronics to fashion, all in one place
                    </p>
                </ul>
                <button tabIndex={5}>Login / Register</button>
            </nav>
        </header>
    );
}
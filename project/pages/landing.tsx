import React from 'react';
import { Link } from 'react-router-dom';
import IphoneImage from '../assets/img/iphone-intro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/intro/intro-section.scss';
import '../assets/img/iphone-intro.png';

export default function Introduction() {
    document.title = "Main | E-commerce";

    return (
        <section className='intro-page'>
            <header>
                <nav>
                    <h4 tabIndex={1}><FontAwesomeIcon icon={faCartShopping} /> E-commerce</h4>
                    <ul>
                        <li tabIndex={2}><Link to={"/Products"}>Product</Link></li>
                        <li tabIndex={3}>Subscription</li>
                        <li className='intro-about-section' tabIndex={4}>About</li>
                        <p className='intro-p-about-section'>
                            Our e-commerce platform offers a vast range of products, making shopping for anything
                            you need a breeze. Explore a diverse selection of items from electronics to fashion, all in one place
                        </p>
                    </ul>
                    <button tabIndex={5}>Login / Register</button>
                </nav>
            </header>
            <div className='body-intro-page'>
                <div className='body-intro-page-text'>
                    <h3 tabIndex={6}>E-commerce Web Template</h3>
                    <p tabIndex={7}>
                        All of CSS html templates are Ready to use for online shops and 
                        marketplace web sites with well organized file structure and well designed stylesheet. 
                        Check our desktop html themes and ecommerce mobile app templates.
                    </p>
                    <button tabIndex={8}>Get Started</button>
                </div>
                <div className='body-intro-page-image'>
                    <img src={IphoneImage} alt="" />
                </div>
            </div>
        </section>
    );
}
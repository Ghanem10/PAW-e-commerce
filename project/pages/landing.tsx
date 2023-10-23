import React from 'react';
import { Link } from 'react-router-dom';
import IphoneImage from '../assets/img/iphone-intro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/intro/intro-section.scss';
import '../assets/img/iphone-intro.png';

export default function Introduction() {
    return (
        <section className='intro-page'>
            <header>
                <nav>
                    <h4><FontAwesomeIcon icon={faCartShopping} /> E-commerce</h4>
                    <ul>
                        <li><a href="./products">Product</a></li>
                        <li>Subscription</li>
                        <li className='intro-about-section'>About</li>
                        <p className='intro-p-about-section'>
                            Our e-commerce platform offers a vast range of products, making shopping for anything
                            you need a breeze. Explore a diverse selection of items from electronics to fashion, all in one place
                        </p>
                    </ul>
                    <button>Login / Register</button>
                </nav>
            </header>
            <div className='body-intro-page'>
                <div className='body-intro-page-text'>
                    <h3>E-commerce Web Template</h3>
                    <p>
                        All of CSS html templates are Ready to use for online shops and 
                        marketplace web sites with well organized file structure and well designed stylesheet. 
                        Check our desktop html themes and ecommerce mobile app templates.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className='body-intro-page-image'>
                    <img src={IphoneImage} alt="" />
                </div>
            </div>
        </section>
    );
}
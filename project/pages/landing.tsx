import React, { useEffect } from 'react';
import IphoneImage from '../assets/img/teardown.svg';
import teardown from '../assets/img/section-dark.png';
import Navbar from '../component/nav/navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { observer } from '../util/animate';

/** StyleSheet */
import '../assets/scss/intro/intro-section.scss';
import '../assets/img/iphone-intro.png';

/** ICons */
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faChrome } from '@fortawesome/free-brands-svg-icons/faChrome';
import { faFirefox } from '@fortawesome/free-brands-svg-icons/faFirefox';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import Counter from '../util/hooks/Counter';

export default function Introduction(): React.JSX.Element {
    document.title = "Main | E-commerce";

    useEffect(() => {
        const hiddenELements = document.querySelectorAll(".left");
        const rightElements = document.querySelectorAll(".right");
        const bottomElements = document.querySelectorAll(".bottom");
        hiddenELements.forEach((el) => observer.observe(el));
        rightElements.forEach((el) => observer.observe(el));
        bottomElements.forEach((el) => observer.observe(el));
    }, [observer]);

    return (
        <React.Fragment>
            <section className='intro-page'>
                <Navbar dir=''/>
                <div className='body-intro-page'>
                    <div className='body-intro-page-text'>
                        <h3 className='left' tabIndex={6}>E-commerce Web Template</h3>
                        <p className='left' tabIndex={7}>
                            All of CSS html templates are Ready to use for online shops and 
                            marketplace web sites with well organized file structure and well designed stylesheet. 
                            Check our desktop html themes and ecommerce mobile app templates.
                        </p>
                        <button className='left' tabIndex={8}>
                            <Link to={'/Subscription'}>
                                Get Started
                            </Link>
                        </button>
                    </div>
                    <div className='body-intro-page-image bottom'>
                        <img src={IphoneImage} alt="" />
                    </div>
                </div>
            </section>
            <section className='intro-page-body'>
                <div className='intro-page-body-img left'>
                    <img src={teardown} alt="" />
                </div>
                <div className='intro-pgae-body-text'>
                    <h1 className='bottom' >Marketplace & built-in Extensions</h1>
                    <p className='bottom' >
                        Need additional features? Connect extensions or write your own! 
                        Now you do not need to use many sources from different systems 
                        - expand and supplement everything in one! Install extensions 
                        and sell your own. Came up with a great extension for your company? 
                        Great! Publish it on the marketplace and share your insights
                        with the whole community.
                    </p>

                    <button className='left' >
                        <Link to={'#'}>
                            Visit E-commerce Marketplace <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </button>
                </div>
            </section>
            <section className='section-people-ecommerce hidden'>
                <div className='section-people-intro'>
                    <h1 className='bottom' >People 🥰 E-commerce</h1>
                    <p className='bottom' >
                        E-commerce is an ethical and powerful service. 
                        Hundreds of people have already made the switch 
                        from Google and other alternatives.
                    </p>
                </div>
                <div className='counter-section left'>
                    <Counter limit={570} title='Registered users' />
                    <Counter limit={2038} title='Added websites'/>
                    <Counter limit={3502} title='Events tracked'/>
                </div>
            </section>
            <footer>
                <div className='footer-details'>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faCartShopping} /> E-commerce
                    </Link>
                    <p className='left' >
                        The best website need the best services.
                        E-commerce is a powerful E-commerce platform.
                    </p>
                    <div className='footer-social-links left'>
                        <Link to={'#'}><FontAwesomeIcon icon={faGithub} /></Link>
                        <Link to={'#'}><FontAwesomeIcon icon={faDiscord} /></Link>
                        <Link to={'#'}><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to={'#'}><FontAwesomeIcon icon={faLinkedin} /></Link>
                        <Link to={'#'}><FontAwesomeIcon icon={faChrome} /></Link>
                        <Link to={'#'}><FontAwesomeIcon icon={faFirefox} /></Link>
                    </div>
                    <span>@2023-10-25. All right reserved.</span>
                </div>
                <div className='footer-links left'>
                    <ul>
                        <h1>FEATURES</h1>
                        <li><Link to={'#'}>Career</Link></li>
                        <li><Link to={'#'}>vs Google Analytics</Link></li>
                        <li><Link to={'#'}>vs Simple Analytics</Link></li>
                        <li><Link to={'#'}>UTM Generator</Link></li>
                        <li><Link to={'#'}>CAPTCHA</Link></li>
                    </ul>
                    <ul>
                        <h1>COMPANY</h1>
                        <li><Link to={'#'}>About us</Link></li>
                        <li><Link to={'#'}>Changelog</Link></li>
                        <li><Link to={'#'}>Open startup</Link></li>
                        <li><Link to={'#'}>Media & Press</Link></li>
                        <li><Link to={'#'}>Status</Link></li>
                        <li><Link to={'#'}>Donate</Link></li>
                        <li><Link to={'#'}>Blog</Link></li>
                        <li><Link to={'#'}>SUPPORT & LEGAL</Link></li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    );
}
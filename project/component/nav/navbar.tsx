import React, { useState, useEffect } from 'react';
import { faBars, faCartShopping, faUserCog, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import '../../assets/scss/intro/_navbar.scss';
import { observer } from '../../util/animate';

type Directions = {
    dir: "left" | "right" | "bottom" | "";
};

export default function Navbar(props: Directions): React.JSX.Element {

    const [navOpen, setNavOpen] = useState<boolean>(false);

    const getWindowDimensions = (): { width: number } => {
        const { innerWidth: width } = window;
        return {
            width
        };
    }
      
    const useWindowDimensions = (): { width: number } => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
            const handleResize = (): void => {
                setWindowDimensions(getWindowDimensions());
            }
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        
        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    const showMenu = () => {
        setNavOpen(pre => !pre);
    };

    useEffect(() => {
        const hiddenELements = document.querySelectorAll(".left");
        hiddenELements.forEach((el) => observer.observe(el));
    }, [width, observer]);

    const NavBar = (): JSX.Element  => {
        return (
            <header>
                <nav>
                    <h4 className={props.dir} tabIndex={1}>
                        <Link to={'/'}>
                            <FontAwesomeIcon icon={faCartShopping} /> E-commerce
                        </Link>
                    </h4>
                    {
                        (width <= 990) ? (
                               <React.Fragment>
                                    {
                                        (navOpen) ? (
                                                <div className='bg-side-bar'>
                                                    <div className='side-bar'>
                                                        <ul>
                                                            <li className='toggle-nav'>
                                                                <FontAwesomeIcon 
                                                                    className='faBars-icon-close' 
                                                                    icon={faX} 
                                                                    onClick={showMenu}
                                                                />
                                                            </li>
                                                            <li tabIndex={2}><Link to={'/Products'}>Product</Link></li>
                                                            <li tabIndex={3}><Link to={'/Subscription'}>Subscription</Link></li>
                                                            <li className='intro-about-section' tabIndex={4}>About</li>
                                                        </ul>
                                                        <Link to={"/Profile"}>
                                                            <button tabIndex={5}>
                                                                <FontAwesomeIcon icon={faUserCog} /> Guest
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={showMenu}
                                                    className='menuBar-btn'
                                                >
                                                    <FontAwesomeIcon className='faBars-icon' icon={faBars} />
                                                </button>
                                            )
                                    }
                               </React.Fragment>
                            ) : (
                            <React.Fragment>
                                <ul className={props.dir}>
                                    <li tabIndex={2}><Link to={'/Products'}>Product</Link></li>
                                    <li tabIndex={3}><Link to={'/Subscription'}>Subscription</Link></li>
                                    <li className='intro-about-section' tabIndex={4}>About</li>
                                </ul>
                                <Link to={"/Profile"}>
                                    <button className={props.dir} tabIndex={5}>
                                        <FontAwesomeIcon icon={faUserCog} /> Guest
                                    </button>
                                </Link>
                            </React.Fragment>
                        )
                    }
                </nav>
            </header>
        );
    }

    return <NavBar />;
}
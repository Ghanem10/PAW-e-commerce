import React, { useEffect, useState } from 'react';
import avatar from '../assets/img/avatar.png'
import { IProducts } from '../util/typesObj';
import { getFavProduct } from '../services/productsData';

import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

/** style */
import '../assets/scss/intro/_items.scss';
import '../assets/scss/intro/_profile.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cookies from 'js-cookie';

export default function Profile(): JSX.Element {

    document.title = "Profile | E-commerce";

    const [favProducts, setFavProducts] = useState<IProducts[]>();
    
    const _removeItem = (ID: string): void => {
        const cookie = cookies.get(`favProducts-${ID}`);
        
        if (cookie === ID) {
            Cookies.remove(`favProducts-${ID}`);
        }
    };

    useEffect(() => {
        const callAPI = async () => {
            const dataProductsfav = [];
            for (let i = 1; i <= 10; i++) {
                const storedProducts = Cookies.get(`favProducts-${i}`);
                if (storedProducts) {
                    const { data }: { data: IProducts[] } = await getFavProduct(storedProducts);
                    dataProductsfav.push(...data);
                }
            }
            setFavProducts(dataProductsfav);
        }

        callAPI();
    }, []);

    return (
        <section className='section-profile'>
            <div className='section-header-navigate'>
                <h1>Personal Info</h1>
                <Link to={'/Products'}>
                    <button className='section-profile-go'>
                        <span>
                            Go back home
                        </span>
                    </button>
                </Link>
            </div>
            <div className='section-contact-form'>
                <img src={avatar} alt="" />
                <div className='section-contact-header'>
                    <span>User: Guest</span>
                    <span>Email: Guest@gmail.com</span>
                </div>
            </div>
            <h1>My favorite</h1>
            <div className='section-fav-info'>
                {favProducts?.map((item, idx) => (
                    <div className='profile-page-item' key={idx}>
                        <img src={`/iphone-intro-${item.productid}.png`} alt="" />
                        <div className='profile-text'>
                            <div className='profile-text-title'>
                                <h3>
                                    <Link to={'#'}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <button onClick={() => _removeItem(`${item.productid}`)}>
                                    <FontAwesomeIcon className={`
                                        ${(favProducts || Cookies.get(`favProducts-${item.productid}`) === JSON.stringify(item.productid)) 
                                            ? "fill-icon" : ""}`} icon={faHeart} 
                                    />
                                </button>
                            </div>
                            <span>{item.description}</span>
                            <div className='profile-price'>
                                <span>{item.price} $</span>
                                <span>{item.rate} %</span>
                            </div>
                            <h3>Time Stamp: {item.time?.toString().slice(0, 10)}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <h1>My recent orders</h1>
            <div className='section-recent-orders'>
                <pre>
                    {'<No Recent Orders />'}
                </pre>
            </div>
        </section>
    );
}
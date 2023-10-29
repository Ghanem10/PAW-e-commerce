import React, { useState, useEffect } from 'react'
import { IProducts } from '../../util/typesObj';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

type IProductsProps = {
    product: IProducts;
};

export default function ItemWraper(props: IProductsProps): React.JSX.Element {
    const [condition, setCondition] = useState<string>("");
    const [favProducts, setFavProducts] = useState<boolean>(false);

    const checkCondition = (): void => {
        if (props.product.condition === "New Brand") {
            setCondition('beta-condition-1');
        } else if (props.product.condition === "Well used") {
            setCondition('beta-condition-2');
        } else {
            setCondition('beta-condition-3');
        }
    }

    const _favProducts = (): void => {
        const ID: number | undefined = props.product.productid;
        const cookie = Cookies.get(`favProducts-${ID}`);
        
        setFavProducts(pre => !pre);
        
        if (cookie === JSON.stringify(ID)) {
            Cookies.remove(`favProducts-${ID}`);
        }

        const notifyElement = document.querySelector('.notify');
        notifyElement?.classList.add("show");
    };    

    useEffect(() => {
        checkCondition();
    }, []);

    useEffect(() => {
        const ID: number | undefined = props.product.productid;
        if (favProducts) {
            Cookies.set(`favProducts-${ID}`, JSON.stringify(ID));
        } 
    }, [favProducts]);
    
    return (
        <div className='products-page-item'>
            <img src={`/iphone-intro-${props.product.productid}.png`} alt="" />
            <span 
                className={condition}
            >
                {props.product.condition}
            </span>
            <div className='products-text'>
                <div className='products-text-title'>
                    <h3>
                        <Link to={'#'}>
                            {props.product.title}
                        </Link>
                    </h3>
                    <button onClick={_favProducts}>
                        <FontAwesomeIcon className={`
                            ${(favProducts || Cookies.get(`favProducts-${props.product.productid}`) === JSON.stringify(props.product.productid)) 
                                ? "fill-icon" : ""}`} icon={faHeart} 
                        />
                    </button>
                </div>
                <span>{props.product.description}</span>
                <div className='products-price'>
                    <span>{props.product.price} $</span>
                    <span>{props.product.rate} %</span>
                </div>
                <h3>Time Stamp: {props.product.time?.toString().slice(0, 10)}</h3>
            </div>
        </div>
    );
}
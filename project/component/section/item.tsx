import React from 'react'
import { IProducts } from '../../util/typesObj';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type IProductsProps = {
    product: IProducts;
};

export default function ItemWraper(props: IProductsProps): React.JSX.Element {
    return (
        <div className='products-page-item'>
            <img src={`/iphone-intro-${props.product.productid}.png`} alt="" />
            <div className='products-text'>
                <div className='products-text-title'>
                    <h3>
                        <Link to={'#'}>
                            {props.product.title}
                        </Link>
                    </h3>
                    <button>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
                <span>{props.product.description}</span>
                <div className='products-price'>
                    <span>{props.product.price} $</span>
                    <span>{(props.product.rate)! * props.product.productid!} %</span>
                </div>
                <h3>Time Stamp: {props.product.time?.toString().slice(0, 10)}</h3>
            </div>
        </div>
    );
}
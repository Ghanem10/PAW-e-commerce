import React, { useEffect, useState } from 'react';
import SelectTap from '../component/section/selectTap';
import { Electronics, Brands, Condition, Price } from '../util/objectsSelection';
import { getFilteredProduct, getProductsData } from '../services/productsData';
import { IProducts } from '../util/typesObj';
import Navbar from '../component/nav/navbar';
import ItemsWraper from '../component/products/items';
import SelectionWraper from '../component/section/selection';
import ItemWraper from '../component/section/item';
import axios from 'axios';

import '../assets/scss/intro/_items.scss';

export default function Products(): React.JSX.Element {
    document.title = "Products | E-commerce";
    
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const { data }: { data: IProducts[] } = await getProductsData();
            setProducts(data);
        }

        getData();
    }, []);
    
    const queryFilteredData = async (): Promise<void>  => {
        //params
        const { data }: { data: IProducts[] } = await getFilteredProduct();
        setProducts(data);
    };

    return (
        <section className='products-page-main'>
            <Navbar dir="" />
            <SelectionWraper>
                <SelectTap product={Electronics} />
                <SelectTap product={Brands} />
                <SelectTap product={Condition} />
                <SelectTap product={Price} />
            </SelectionWraper>
            <button 
                className='query-btn' 
                onClick={queryFilteredData}
            >
                Query results 🔥
            </button>
            <h1>Found {products.length} products</h1>
            <ItemsWraper>
                {products.map((item: IProducts) => (
                    <ItemWraper
                        key={item.productid}
                        product={item}
                    />
                ))}
            </ItemsWraper>
        </section>
    );
}
import React, { useEffect, useState } from 'react';
import SelectTap from '../component/selection/selectTap';
import { Electronics, Brands, Condition, Price } from '../util/objectsSelection';
import { getProductsData } from '../services/productsData';
import { IProducts } from '../util/typesObj';

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

    return (
        <section className='products-page-main'>
            <div className='products-page-selection'>
                <SelectTap product={Electronics} />
                <SelectTap product={Brands} />
                <SelectTap product={Condition} />
                <SelectTap product={Price} />
            </div>
            <div className='products-page-links'>Home {'>'} Products</div>
            <h1>Found {products.length} products</h1>
            <div className='products-page-items'>
                {products.map((item: IProducts, idx) => (
                    <div className='products-page-items' key={idx}>
                        <img src="" alt="" />
                        <h3>{item.title}</h3>
                        <div className='products-page-inner'>
                            <span>{item.price}</span>
                            <span>{item.rate}</span>
                        </div>
                        <h3>Time Stamp: {item.time?.toString()}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
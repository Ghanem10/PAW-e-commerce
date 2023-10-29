import React, { useEffect, useState } from 'react';
import SelectTap from '../component/section/selectTap';
import { Rate, Condition, Price } from '../util/objectsSelection';
import { getFilteredProduct, getProductsData } from '../services/productsData';
import { IPriceQuery, IProducts } from '../util/typesObj';
import Navbar from '../component/nav/navbar';
import ItemsWraper from '../component/products/items';
import SelectionWraper from '../component/section/selection';
import ItemWraper from '../component/section/item';

import '../assets/scss/intro/_items.scss';

export default function Products(): React.JSX.Element {
    document.title = "Products | E-commerce";
    
    const [products, setProducts] = useState<IProducts[]>([]);

    const [price, setPrice] = useState<string>("");
    const [rate, setRate] = useState<string>("");
    const [condition, setCondition] = useState<string>("");

    const [error, setError] = useState<string>("");

    const getRate = (e: HTMLSelectElement): void => { setRate(e.value); };
    const getCondition = (e: HTMLSelectElement): void => { setCondition(e.value); };
    const getPrice = (e: HTMLSelectElement): void => { console.log(e.value); setPrice(e.value); };
    
    const queryFilteredData = async (): Promise<void>  => {
        try {

            if (!price || !rate || !condition) {
                setError("Please, select three options to filter.");

                setTimeout(() => {
                    setError("");
                }, 4000);

                return;
            }

            let priceQuery: IPriceQuery = { one: "", two: "" };
            let rateQuery: {
                cone: string;
                ctwo: string;
            } = { cone: "", ctwo: "" };
            
            if (price === "$10 - $600") {
                priceQuery.one = "10";
                priceQuery.two = "600";
            } else if (price === "$600 - $1000") {
                priceQuery.one = "600";
                priceQuery.two = "1000";
            } else {
                priceQuery.one = "1000";
                priceQuery.two = "2000";
            }

            if (rate === "10% - 50%") {
                rateQuery.cone = "10";
                rateQuery.ctwo = "50"; 
            } else if (rate === "50 - 75") {
                rateQuery.cone = "50";
                rateQuery.ctwo = "75";
            } else {
                rateQuery.cone = "75";
                rateQuery.ctwo = "100";
            }

            const { data }: { data: IProducts[] } = await getFilteredProduct(priceQuery, rateQuery, condition);
            setProducts(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const getData = async (): Promise<void> => {
            const { data }: { data: IProducts[] } = await getProductsData();
            setProducts(data);
        }
        
        getData();
    }, []);

    return (
        <section className='products-page-main'>
            <Navbar dir="" />
            {error && <h1 className='error-message show'>{error}</h1>}
            <SelectionWraper>
                <SelectTap getOption={getRate} product={Rate} />
                <SelectTap getOption={getCondition} product={Condition} />
                <SelectTap getOption={getPrice} product={Price} />
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
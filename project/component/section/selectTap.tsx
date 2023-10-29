import React from 'react';
import { SelectionProducts } from '../../util/typesObj';

declare type IProductsSelection = {
    product: SelectionProducts;
    getOption: (e: HTMLSelectElement) => void;
};

export default function SelectTap({ product , getOption }: IProductsSelection): React.JSX.Element {

    const handleClick = (e: React.MouseEvent<HTMLSelectElement>) => {
        getOption(e.currentTarget);
    };

    return (
        <React.Fragment>
            <select onClick={handleClick}>
                <option>{product.name}</option>
                <option value={product.value_one}>{product.value_one}</option>
                <option value={product.value_two}>{product.value_two}</option>
                <option value={product.value_three}>{product.value_three}</option>
            </select>
        </React.Fragment>
    )
}
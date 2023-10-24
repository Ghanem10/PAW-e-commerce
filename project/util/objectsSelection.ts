import { SelectionProducts } from './typesObj';

const Electronics: SelectionProducts = {
    label: 'Electronics',
    name: 'Electronics',
    value_one: 'Watch',
    value_two: 'Iphone',
    value_three: 'Laptop',
};

const Brands: SelectionProducts = {
    label: 'Brands',
    name: 'Brands',
    value_one: 'Electronics',
    value_two: 'Equipments',
    value_three: 'Home goods',
};

const Condition: SelectionProducts = {
    label: 'Condition',
    name: 'Condition',
    value_one: 'New Brand',
    value_two: 'Well used',
    value_three: 'Heavily used',
};

const Price: SelectionProducts = {
    label: 'Pricing',
    name: 'Price',
    value_one: '$200 - $600',
    value_two: '$600 - $1000',
    value_three: '$1000 and more',
};

export {
    Electronics,
    Brands,
    Condition,
    Price
};
import { SelectionProducts } from './typesObj';

const Rate: SelectionProducts = {
    label: 'Rate',
    name: 'Rate',
    value_one: '10% - 50%',
    value_two: '50% - 75%',
    value_three: '75% - 100%',
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
    value_one: '$10 - $600',
    value_two: '$600 - $1000',
    value_three: '$1000 and more',
};

export {
    Rate,
    Condition,
    Price
};
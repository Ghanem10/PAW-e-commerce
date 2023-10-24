
/** Selected Items */
export type SelectionProducts = {
    label?: string;
    name?: string;
    value_one?: string;
    value_two?: string;
    value_three?: string;
};

/** Product in PSQL */
export type IProducts = {
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    rate?: number;
    time?: Date;
};
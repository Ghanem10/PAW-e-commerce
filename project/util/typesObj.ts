
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
    productid?: number;
    title?: string;
    description?: string;
    price?: number;
    rate?: number;
    condition?: string;
    time?: Date;
};

export type IPriceQuery = {
    one: string;
    two: string;
};

export type IRateQuery = {
    cone: string;
    ctwo: string;
};
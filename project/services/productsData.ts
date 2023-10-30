import axios, { AxiosResponse } from "axios";
import { IProducts, IPriceQuery, IRateQuery } from "../util/typesObj";

export const getProductsData = async (): Promise<AxiosResponse<IProducts[]>> => {
    const response:  AxiosResponse<{ products: { rows: IProducts[] } }> = await axios
                .get(`${import.meta.env.VITE_URL_BASE}/api/v12/products`);

    const data = response.data.products.rows;
    return { ...response, data};
};

export const getFilteredProduct = async (price: IPriceQuery, rate: IRateQuery, condition: string ): Promise<AxiosResponse<IProducts[]>> => {
    const response: AxiosResponse<{ products: { rows: IProducts[] } }> = await axios
                .get(`${import.meta.env.VITE_URL_BASE}/api/v12/filter`, { 
                    params: {
                        one: price.one,
                        two: price.two,
                        oneC: rate.cone,
                        twoC: rate.ctwo,
                        condition
                    },
                });

    const data = response.data.products.rows;
    return { ...response, data};        
};

export const getFavProduct = async (getProductIDs: string | null): Promise<AxiosResponse<IProducts[]>> => {
    const response: AxiosResponse<{ productById: { rows: IProducts[] } }> = await axios
                .get(`${import.meta.env.VITE_URL_BASE}/api/v12/getProduct`, { 
                    params: {
                        getProductIDs
                    },
                });

    const data = response.data.productById.rows;
    return { ...response, data};        
};
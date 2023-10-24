import axios, { AxiosResponse } from "axios";
import { IProducts } from "../util/typesObj";

export const getProductsData = async (): Promise<AxiosResponse<IProducts[]>> => {
    const response:  AxiosResponse<{ products: { rows: IProducts[] } }> = await axios
                .get(`http://localhost:4000/api/v12/products`);

    const data = response.data.products.rows;
    return { ...response, data};
};
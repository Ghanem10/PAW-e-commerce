
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

/** token JWT */
const token: string = JSON.parse(localStorage.getItem("AuthUser") || '');

if (token) { axios.defaults.headers.common["Authorization"] = "Bearar" + token };

// intercepting to capture errors
axios.interceptors.request.use(
    function(response) {
        return response.data ? response.data : response;
    },
    function(error): Promise<never> {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let message: string = "";
 
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            case 404:
                message = "Sorry! the data you are looking for could not be found";
                break;
            default:
                message = error.message || error;
        }

        return Promise.reject(message);
    }
);


/**** Sets the default authorization ****/
const setAuthorizationHeader = (token: string): void => {
    axios.defaults.headers.common["Authorization"] = "Bearar" + token;
};

class APIClientEndingPoint {
    constructor() {}

    get = (url: string, params: Record<string, any>) => {
        let response: any;
        let paramKeys: string[] = [];

        if (params) {
            Object.keys(params).map((key) => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            });
        }
    }

    /**
     * post given data to url
     */
    create = (url: string, data: any) => {
        return axios.post(url, data);
    };

    /**
     * Updates data
     */
    update = (url: string, data: any) => {
        return axios.patch(url, data);
    };

    put = (url: string, data: any) => {
        return axios.put(url, data);
    };

    /**
     * Delete
     */
    delete = (url: string, config: any) => {
        return axios.delete(url, { ...config });
    };
}

const getLoggedinUser = () => {
    
    const user: string | null = localStorage.getItem("AuthUser");

    if (!user) {
        return null;
    } else {
        return JSON.parse(user);
    }
};
  
export { APIClientEndingPoint, setAuthorizationHeader, getLoggedinUser };
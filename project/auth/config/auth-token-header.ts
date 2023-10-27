
type IAuthHeader = {
    Authorization: string;
} | {};

/** Auth users based on JWT token */
export default function AuthHeader(): IAuthHeader {

    const object: Storage = JSON.parse(localStorage.getItem("AuthUser") || '');

    if (object && object.accessToken) {
        return { Authorization: object.accessToken };
    } else {
        return {};
    }
}
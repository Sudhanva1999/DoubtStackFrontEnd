import _axios from "axios";

const REACT_APP_API_URL = "https://dbstack.sudhanvapaturkar.com";

const handleRes = (res) => {
    return res;
};

const handleErr = (err) => {
    console.log(err);
    return err;
};

const api = _axios.create({ withCredentials: true });
api.interceptors.request.use(handleRes, handleErr);
api.interceptors.response.use(handleRes, handleErr);

export { REACT_APP_API_URL, api };

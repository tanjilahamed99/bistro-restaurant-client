import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'http://localhost:5000'
})


const UsePublicAxios = () => {
    return publicAxios
};

export default UsePublicAxios;
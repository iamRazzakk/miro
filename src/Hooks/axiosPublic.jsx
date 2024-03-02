import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://github.com/iamRazzakk/miro/blob/main/src/assets/Carusel.json'

})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
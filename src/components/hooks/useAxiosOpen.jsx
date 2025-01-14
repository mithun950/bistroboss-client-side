import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',
})
const useAxiosOpen = () => {
  return axiosPublic;  
};

export default useAxiosOpen;
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const useAxiosSecure = () => {
const navigate = useNavigate();
const{logOut}= useAuth()
const axiosSecure = axios.create({
  baseURL: 'https://assignment-12-summer-camp-server-ruddy.vercel.app'
});

axiosSecure.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('access-token');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosSecure.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      navigate('/');
      // Call the logOut function to log out the user
      logOut();
    }
    return Promise.reject(error);
  }
);

return axiosSecure;
};

export default useAxiosSecure;

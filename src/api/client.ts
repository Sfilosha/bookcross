import axios from 'axios';
import Toast from 'react-native-toast-message';

const apiClient = axios.create({
  baseURL: 'https://69f39604bd2396bf531039f1.mockapi.io/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (!error.response) {
      Toast.show({
        type: 'error',
        text1: 'There are network connection issue.',
        text2: 'Please check your internet connection.',
        position: 'bottom',
      });
    } else {
      const status = error.response.status;

      if (status === 500) {
        Toast.show({
          type: 'error',
          text1: 'Server Error',
          text2: 'We are working on it!',
        });

        if (status === 404) {
          Toast.show({
            type: 'error',
            text1: 'Page Not Found',
            text2: 'Page with this address don`t exists',
          });
        }
      }

      return Promise.reject(error);
    }
  },
);

export default apiClient;

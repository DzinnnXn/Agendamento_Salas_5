// api.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.105:8000',
    timeout: 10000,  // Tempo limite da requisição, se necessário ajustar
});

export const signup = async (username, email, password, firstName, lastName) => {
    try {
        const response = await axios.post('http://192.168.0.105:8000/api/signup/', {
            username: username,
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        });
        console.log('POST request:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error signing up', error);
        throw error;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://192.168.0.105:8000/api/token/', {
            username: username,
            password: password,
        });
        console.log('POST request:', response.data);

        // Armazene os tokens em AsyncStorage
        await AsyncStorage.setItem('access_token', response.data.access);
        await AsyncStorage.setItem('refresh_token', response.data.refresh);

        return response.data;
    } catch (error) {
        console.error('Error logging in', error);
        throw error;
    }
};

export default api;

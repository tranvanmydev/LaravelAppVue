import axios from 'axios';

export default class AuthService {

    /**
     * @returns {AxiosPromise<any>}
     */
    static getProfile() {
        return axios.get('/api/auth/user')
            .then(response => response)
            .catch(error => error);
    }

    /**
     * @param { object } user
     *
     * @returns {AxiosPromise<any>}
     */
    static login(credentials) {
        return axios.post('/api/auth/login', {
            'email': credentials.email,
            'password': credentials.password,
        })
            .then(response => response)
            .catch(error => error);
    }

    /**
     * @returns {AxiosPromise<any>}
     */
    static logout() {
        return axios.post('/api/auth/logout')
            .then(response => response)
            .catch(error => error.response);
    }
}

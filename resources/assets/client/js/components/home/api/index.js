import axios from 'axios';

export default class HomeService {
    /**
     * @param  { object } user
     * @param  { int } id
     *
     * @returns {AxiosPromise<any>}
     */
    static changePassWord(params) {
        return axios.put('/api/profile/password', params)
            .then(response => response)
            .catch(error => error);
    }
}

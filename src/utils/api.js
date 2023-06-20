import { baseUrl, headers } from "./constants";

class Api {
    constructor({ baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _processResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`An error just occurred: ${res.status}`);
        }
    }

    // getData(url) {
    //     return fetch(url)
    //     .then(this._processResponse)
    //     .catch((error) => {
    //         console.error("Error fetching data:", error);
    //         throw error;
    //     })
    // }

    getUsers() {
        return fetch(`${this._baseUrl}/users`, {
            method: 'GET',
            headers: this._headers,
        }).then((data) => data)
        .then(this._processResponse);
    }

    getPosts() {
        return fetch(`${this._baseUrl}/posts`, {
            method: 'GET',
            headers: this._headers,
        }).then((data) => data)
        .then(this._processResponse);
    }

    getComments() {
        return fetch(`${this._baseUrl}/comments`, {
            method: 'GET',
            headers: this._headers,
        }).then((data) => data)
        .then(this._processResponse);
    }
}

const api = new Api({ baseUrl, headers });

export default api;

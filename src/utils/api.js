import { baseUrl, headers } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  processResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`An error occurred: ${res.status}`);
    }
  }

  getData(url) {
    return fetch(url)
      .then(this.processResponse)
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }

  getUsers() {
    return fetch(`${this.baseUrl}/users`, {
      method: "GET",
      headers: this.headers,
    }).then(this.processResponse);
  }

  getPosts() {
    return fetch(`${this.baseUrl}/posts`, {
      method: "GET",
      headers: this.headers,
    }).then(this.processResponse);
  }

  getComments() {
    return fetch(`${this.baseUrl}/comments`, {
      method: "GET",
      headers: this.headers,
    }).then(this.processResponse);
  }
}

const api = new Api({ baseUrl, headers });

export default api;

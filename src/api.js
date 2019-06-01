import axios from 'axios';

export default class Api {
  constructor() {
    this.url = process.env.API_URL;
  }

  get(target, id) {
    return new Promise((resolve) => { resolve(axios.get(`${this.url}${target}/${id}`)); });
  }

  delete(target, id) {
    return new Promise((resolve) => { resolve(axios.delete(`${this.url}${target}/${id}`)); });
  }

  deleteList(target, list) {
    return new Promise((resolve) => { resolve(axios.delete(this.url + target, list)); });
  }

  getAll(target) {
    return new Promise((resolve) => { resolve(axios.get(this.url + target)); });
  }

  put(target, entity, id) {
    return new Promise((resolve) => { resolve(axios.put(`${this.url}${target}/${id}`, entity)); });
  }

  post(target, entity) {
    return new Promise((resolve) => { resolve(axios.post(this.url + target, entity)); });
  }
}

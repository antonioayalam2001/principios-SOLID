// import axios from "axios";

import { HttpClient } from "./02-open-and-close-c";

export class TodoService {
    #httpClient: HttpClient
    constructor(httpClient: HttpClient) {
        this.#httpClient = httpClient
    }
    async getTodoItems() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const { data, status } = await this.#httpClient.get('https://jsonplaceholder.typicode.com/todos');
        return {data , status}
    }
}

export class PostService {
    #httpClient: HttpClient
    constructor(httpClient: HttpClient) {
        this.#httpClient = httpClient
    }
    async getPosts() {
        const { data, status } = await this.#httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data
    }
}

export class PhotosService {
    #httpClient: HttpClient
    constructor(httpClient: HttpClient) {
        this.#httpClient = httpClient
    }
    async getPhotos() {
        const { data, status } = await this.#httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data
    }
}
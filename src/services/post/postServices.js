import axios from 'axios';

export const getPostsRequest = async () => axios.get('https://jsonplaceholder.typicode.com/posts');

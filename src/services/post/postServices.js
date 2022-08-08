import axios from 'axios';

export const getPostsRequest = async () => axios.get('/posts');
export const getSinglePostRequest = async id => axios.get(`/posts/${id}`);

export const deleteSinglePostRequest = async id => axios.delete(`/posts/${id}`);

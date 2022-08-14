import axios from 'axios';

export const getPostsRequest = async () => axios.get('/posts');
export const getSinglePostRequest = async id => axios.get(`/posts/${id}`);

export const deleteSinglePostRequest = async id => axios.delete(`/posts/${id}`);

export const createSinglePostRequest = async (id, body) => axios.post(`/posts`, body);

export const updateSinglePostRequest = async (id, body) => axios.put(`/posts/${id}`, body);

// add  /posts
// update put /posts/id

// треба прокидувати баді другим параметромб rest API body

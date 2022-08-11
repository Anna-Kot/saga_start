import axios from 'axios';

export const getPostsRequest = async () => axios.get('/posts');
export const getSinglePostRequest = async id => axios.get(`/posts/${id}`);

export const deleteSinglePostRequest = async id => axios.delete(`/posts/${id}`);

export const createSinglePostRequest = async id => axios.post(`/posts`, 'маю отрмати з параметра і прокинути в сагу');

export const updateSinglePostRequest = async id => axios.put(`/posts/${id}`);

// add  /posts
// update put /posts/id

// треба прокидувати баді другим параметромб rest API body

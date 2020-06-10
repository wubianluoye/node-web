import axios from 'axios'

import router from '@/router'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 3000
});


instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // if(localStorage.token) {
  // 	const token = 'Bearer ' + localStorage.token
  // 	config.headers.Authorization = token
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
 	response.data.token && localStorage.setItem('token', response.data.token)
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  // if(error.response.status===401) {
  //   Message.error(error.message)
  // 	localStorage.removeItem('token')
  // 	router.push('/login')
  // }
  return Promise.reject(error);
});

export default instance
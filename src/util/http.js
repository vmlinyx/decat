import axios from 'axios';

const instance = axios.create({
  baseURL: '', // process.env.REACT_APP_BASE_URL,
  timeout: 5000, // Number(process.env.REACT_APP_TIME_OUT),
});

const { request, response } = instance.interceptors;

// * 全局请求拦截
// 发送请求之前执行
request.use(
  (config) => {
    // TODO 如设置请求的 token
    return config;
  },
  (error) => {
    // TODO
    return Promise.reject(error);
  }
);

// 请求返回之后执行
response.use(
  (response) => {
    // TODO
    return response.data;
  },
  (error) => {
    // TODO
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return instance.get(url, { params });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}

export function del(url) {
  return instance.delete(url);
}

// 使用的时候直接可以在@/api 文件夹下创建对应的 js 文件，然后配置对应的接口
// import { get } from "@/services/request";
// const fetchListApi = () => get("/list");
// export { fetchListApi };

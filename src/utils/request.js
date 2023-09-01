import axios from "axios";
import { Notify } from 'vant';

var pro = "production" == process.env.NODE_ENV;
var baseUrl = pro
  ? window.gApi.baseUrl
  : process.env.VUE_APP_API_URL;


const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
  headers: { "Content-Type": "application/json" },
});

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    const statusCode = response.status;
    const headers = response.headers;
    if (headers["content-type"] === "application/vnd.ms-excel;charset=utf-8") {
      return response;
    }

    if (statusCode !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    Notify({ type: 'danger', message: error.message });
    return Promise.reject(error);
  }
);

export default service;

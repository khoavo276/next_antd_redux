import { STATUS_CODE } from '@config/constants';
import { ERROR_MESSAGES } from '@config/messages';
import axios from 'axios';
import queryString from 'query-string';

import { getAccessToken, revokeUser } from './cookie';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/api`,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: parameters => queryString.stringify(parameters)
});

api.interceptors.request.use(config => {
  if (getAccessToken()) {
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
  }
  return config;
});

api.interceptors.response.use(
  response => {
    if (response && response.headers) {
      return { ...response.headers, ...response?.data };
    }

    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  error => {
    const { response } = error;
    let errorResponse = {
      message: error.message
    };

    if (response) {
      if (response.status === STATUS_CODE.Unauthorized) {
        revokeUser();
      }

      let message = ERROR_MESSAGES.default;

      errorResponse = {
        status: response.status,
        message: response?.data?.error || message
      };
    }

    return Promise.reject(errorResponse);
  }
);

export default api;

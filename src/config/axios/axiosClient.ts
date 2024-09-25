import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import { _AppService } from '../../core/app';
import { API_DOMAIN, MODE_VALUES } from '../../models';

let axiosInstanceVdt: ReturnType<typeof axiosInstance>;
let axiosInstanceAI: ReturnType<typeof axiosInstance>;
let brandUrl = '';
let token = '';
let userHeaders: RawAxiosRequestHeaders = {};

// Get config, then set values to axiosInstanceJfw and brandUrl
const config$ = _AppService.getConfig$();

config$.subscribe((config) => {
  if (config) {
    const baseUrl =
      config.mode === MODE_VALUES.development
        ? API_DOMAIN.development
        : API_DOMAIN.production;
    const baseUrlAI =
      config.mode === MODE_VALUES.development
        ? API_DOMAIN.ai_development
        : API_DOMAIN.ai_production;

    brandUrl = config.brandUrl;

    axiosInstanceVdt = axiosInstance(baseUrl || '');
    axiosInstanceAI = axiosInstance(baseUrlAI || '');
  }
});

// Get token, then set value to token
const token$ = _AppService.getToken$();

token$.subscribe((key) => {
  token = key;
});

// Get userHeaders, then set value to userHeaders
const userHeaders$ = _AppService.getUserHeaders$();

userHeaders$.subscribe((headers) => {
  userHeaders = headers;
});

// Create axios instance
const axiosInstance = (baseUrl: string) => {
  const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
      'content-type': 'application/json',
    },
  });
  axiosClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      config.headers['BrandUrl'] = brandUrl;

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      for (const header in userHeaders) {
        config.headers[header] = userHeaders[header];
      }

      return config;
    },
  );
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response && response.data) {
        return response.data;
      }
      if (typeof response.data === 'boolean') {
        return response.data;
      }
      return response;
    },
    (error) => {
      // Handle errors
      throw error;
    },
  );

  return axiosClient;
};

export { axiosInstanceAI, axiosInstanceVdt };

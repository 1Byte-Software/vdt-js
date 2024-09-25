import { RawAxiosRequestHeaders } from 'axios';
import {
  ICategory,
  IGetListCategoriesParams,
  IGetListCategoriesPath,
} from '../models';
import { get } from '../utils/axiosHelper';
import { formatStringByObj } from '../utils/common';

const REST = 'categories';
const MENU = 'menu';
const REST_CATEGORY = 'category';

const GET_CATEGORY_BY_MENU = `${REST_CATEGORY}/menu/{code}`;
const GET_LIST_MENU_CATEGORIES = `${REST}/${MENU}/{menuCode}`;

export const getListMenuCategoriesAPI = async (
  path: IGetListCategoriesPath,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICategory[]> => {
  const { menuCode } = path;
  const url = formatStringByObj(GET_LIST_MENU_CATEGORIES, {
    menuCode,
  });
  const response = await get(url, null, userHeaders);
  return response.data;
};

export const getListCategoriesAPI = async (
  params: IGetListCategoriesParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICategory[]> => {
  const url = `${REST_CATEGORY}`;
  const response = await get(url, { params }, userHeaders);
  return response.data;
};

export const getCategoryByMenuCodeAPI = async (
  code: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICategory[]> => {
  const response = await get(
    formatStringByObj(GET_CATEGORY_BY_MENU, {
      code,
    }),
    null,
    userHeaders,
  );

  return response.data;
};

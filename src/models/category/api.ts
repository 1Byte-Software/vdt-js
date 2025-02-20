import { ICategory, IQueryCategoryParams } from '@/models';
import { get } from '@/utils/axiosHelper';
import { generatePath } from '@/utils/path';
import { RawAxiosRequestHeaders } from 'axios';
import { CATEGORY_PATH } from './path';

export const queryCategoryAPI = async (
  params?: IQueryCategoryParams,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICategory[]> => {
  const url = CATEGORY_PATH.QUERY;

  const response = await get(url, { params }, userHeaders);
  return response.data;
};

export const getCategoryByMenuAPI = async (
  codeCategory: string,
  userHeaders?: RawAxiosRequestHeaders,
): Promise<ICategory[]> => {
  const url = generatePath(CATEGORY_PATH.GET_BY_MENU, {
    codeCategory,
  });

  const response = await get(url, null, userHeaders);
  return response.data;
};

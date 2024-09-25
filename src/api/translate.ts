import { axiosInstanceAI } from '../config/axios/axiosClient';
import { ITranslateParams } from '../models';

const REST = 'translation';

export const translateAPI = async (params: ITranslateParams) => {
  const url = `${REST}`;
  const response = await axiosInstanceAI.get(url, {
    params,
  });

  return response.data;
};

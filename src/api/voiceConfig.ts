import { RawAxiosRequestHeaders } from 'axios';
import { IVoiceConfig } from '../models';
import { get } from '../utils/axiosHelper';

const REST = 'voice-configs';

export const getAllVoiceConfigsAPI = async (
  userHeaders?: RawAxiosRequestHeaders,
): Promise<IVoiceConfig[]> => {
  const url = `${REST}`;
  const response = await get(url, null, userHeaders);

  return response.data;
};

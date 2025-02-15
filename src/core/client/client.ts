import { RawAxiosRequestHeaders } from 'axios';
import { _AppService } from '../app/app';
import { VdtConfig } from '../../models/types';

export class VdtClient {
  constructor(config: VdtConfig) {
    _AppService.setConfig(config);
  }

  setToken(authKey: string) {
    _AppService.setToken(authKey);
  }

  setHeaders(headers: RawAxiosRequestHeaders) {
    _AppService.setUserHeaders(headers);
  }

  getHeader(): RawAxiosRequestHeaders {
    return _AppService.getUserHeaders$().value;
  }
}

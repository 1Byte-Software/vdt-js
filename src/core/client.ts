import { RawAxiosRequestHeaders } from 'axios';
import { _AppService } from './app';
import { VdtConfig } from '../models';

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
}

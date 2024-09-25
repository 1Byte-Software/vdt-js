import { RawAxiosRequestHeaders } from 'axios';
import { BehaviorSubject } from 'rxjs';
import { VdtConfig } from '../models';

class AppService {
  private static _instance: AppService;
  private _appConfig$ = new BehaviorSubject<VdtConfig>(null);
  private _token$ = new BehaviorSubject<string>('');
  private _userHeaders$ = new BehaviorSubject<RawAxiosRequestHeaders>(null);

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  getConfig$() {
    return this._appConfig$;
  }

  setConfig(config: VdtConfig) {
    this._appConfig$.next(config);
  }

  getToken$() {
    return this._token$;
  }

  setToken(Token: string) {
    this._token$.next(Token);
  }

  getUserHeaders$(): BehaviorSubject<RawAxiosRequestHeaders | null> {
    return this._userHeaders$;
  }

  setUserHeaders(headers: RawAxiosRequestHeaders) {
    this._userHeaders$.next(headers);
  }
}

export const _AppService = AppService.Instance;

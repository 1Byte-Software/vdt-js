export interface IGetTokenPayload {
  authKey: string;
  username: string;
  brandUrl?: string;
}
export interface ITokenResponse {
  accessToken: string;
  refreshToken: string;
  userType: number;
}

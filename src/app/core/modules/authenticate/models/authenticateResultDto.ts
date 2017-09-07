export interface AuthenticateResultDto {
    accessToken?: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
    expireTime: number;
}

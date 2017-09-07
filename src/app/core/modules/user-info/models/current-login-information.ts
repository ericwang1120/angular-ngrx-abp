export class CurrentLoginInformation {
    application?: ApplicationInfoDto;
    user?: UserLoginInfoDto;
    tenant?: TenantLoginInfoDto;
}

export class ApplicationInfoDto {
    version?: string;
    releaseDate?: string;;
    features;
}

export class UserLoginInfoDto {
    name?: string;
    surname?: string;
    userName?: string;
    emailAddress?: string;
    id?: number;
}

export class TenantLoginInfoDto {
    tenancyName: string;
    name: string;
    id: number;
}
export class CreateUserDto {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive: boolean;
    roleNames?: string[];
    password: string;

    constructor() {
        this.userName = '';
        this.name = '';
        this.surname = '';
        this.emailAddress = '';
        this.isActive = true;
        this.roleNames = [];
        this.password = '';
    }
}

export class UserDto {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive?: boolean;
    fullName?: string;
    lastLoginTime?: string;
    creationTime: string;
    roleNames?: string[];
    id?: number;

    constructor() {
        this.userName = '';
        this.name = '';
        this.surname = '';
        this.emailAddress = '';
        this.isActive = true;
        this.fullName = '';
        this.lastLoginTime = '';
        this.creationTime = '';
        this.roleNames = [];
    }
}

export interface PagedResultDtoOfUserDto {
    totalCount?: number;
    items?: UserDto[];
}

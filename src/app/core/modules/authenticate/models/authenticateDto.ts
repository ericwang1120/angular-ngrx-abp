export class AuthenticateDto {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient?: boolean;

    constructor(){
        this.userNameOrEmailAddress="";
        this.password="";
    }
}
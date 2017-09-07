export class CreateTenantDto {
    tenancyName: string;
    name: string;
    adminEmailAddress: string;
    connectionString?: string;
    isActive?: boolean

    constructor() {
        this.tenancyName = "";
        this.name = "";
        this.adminEmailAddress = "";
        this.connectionString = "";
        this.isActive = true;
    }
}
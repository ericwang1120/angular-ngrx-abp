export class PermissionDto {
    name?: string;
    displayName?: string;
    description?: string;
    id?: boolean;

    constructor() {
        this.name = '';
        this.displayName = '';
        this.description = '';
        this.id = null;
    }
}

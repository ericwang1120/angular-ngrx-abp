export class CreatePoleCategoryDto {
    name: string;
    displayName: string;
    normalizedName?: string;
    description?: string;
    isStatic?: boolean;
    permissions?: string[];

    constructor() {
        this.name = '';
        this.displayName = '';
        this.normalizedName = '';
        this.description = '';
        this.permissions = [];
    }
}

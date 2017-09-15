export class PoleCategoryDto {
    name: string;
    displayName: string;
    normalizedName?: string;
    description?: string;
    isStatic?: boolean;
    permissions?: string[];
    id?: number;

    constructor() {
        this.name = '';
        this.displayName = '';
        this.permissions = [];
        this.description = '';
    }
}

export interface PagedResultDtoOfPoleCategoryDto {
    totalCount?: number;
    items?: PoleCategoryDto[];
}

export class PoleDto {
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

export interface PagedResultDtoOfPoleDto {
    totalCount?: number;
    items?: PoleDto[];
}

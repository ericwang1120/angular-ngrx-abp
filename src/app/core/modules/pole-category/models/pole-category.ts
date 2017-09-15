export class PoleCategoryDto {
    id: string;
    code: string;
    name: string;
    description?: string;

    constructor() {
        this.id = '';
        this.code = '';
        this.description = '';
    }
}

export interface PagedResultDtoOfPoleCategoryDto {
    totalCount?: number;
    items?: PoleCategoryDto[];
}

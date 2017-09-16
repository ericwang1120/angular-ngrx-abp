export class PoleDto {
    code: string;
    name: string;
    poleCategoryId: string;
    height: number;
    longitude: number;
    latitude: number;
    description?: string;
    id: string;

    constructor() {
        this.code = '';
        this.name = '';
        this.poleCategoryId = '';
        this.height = 0;
        this.longitude = 0;
        this.latitude = 0;
        this.description = '';
        this.id = '';
    }
}

export interface PagedResultDtoOfPoleDto {
    totalCount?: number;
    items?: PoleDto[];
}

export class CreatePoleDto {
    code: string;
    name: string;
    poleCategoryId: string;
    height: number;
    longitude: number;
    latitude: number;
    description?: string;

    constructor() {
        this.code = '';
        this.name = '';
        this.poleCategoryId = '';
        this.height = 0;
        this.longitude = 0;
        this.latitude = 0;
        this.description = '';
    }
}

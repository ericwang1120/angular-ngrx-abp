export class CreatePoleCategoryDto {
    code: string;
    name: string;
    description?: string;

    constructor() {
        this.code = '';
        this.description = '';
    }
}

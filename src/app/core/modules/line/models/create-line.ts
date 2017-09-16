export class CreateLineDto {
    code: string;
    beginPoleId: string;
    endPoleId: string;
    description?: string;

    constructor() {
        this.code = '';
        this.beginPoleId = '';
        this.endPoleId = '';
        this.description = '';
    }
}

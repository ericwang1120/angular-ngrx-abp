export class LineDto {
    code: string;
    beginPoleId: string;
    endPoleId: string;
    description?: string;
    id: string;

    constructor() {
        this.code = '';
        this.beginPoleId = '';
        this.endPoleId = '';
        this.description = '';
        this.id = '';
    }
}

export interface PagedResultDtoOfLineDto {
    totalCount?: number;
    items?: LineDto[];
}

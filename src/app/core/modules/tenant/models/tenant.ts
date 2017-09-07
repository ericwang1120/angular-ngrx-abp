export class TenantDto {
    tenancyName: string;
    name: string;
    isActive?: boolean;
    id?: number;
}

export interface PagedResultDtoOfTenantDto {
    totalCount?: number;
    items?: TenantDto[];
}
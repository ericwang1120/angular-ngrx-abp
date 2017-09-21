export class LocalizationDto {
    currentCulture?: CurrentCultureDto;
    currentLanguage?: LanguageDto;
    languages?: LanguageDto[];
    values?: any;
}

export class CurrentCultureDto {
    name: string;
    displayName: string;
}

export class LanguageDto {
    name: string;
    displayName: string;
    icon: string;
    isDefault: boolean;
    isDisabled: boolean;
}

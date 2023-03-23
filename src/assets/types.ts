export type Country = {
    code: string;
    name?: string;
    native?: string;
    capital?: string;
    emoji?: string;
    currency?: string;
    continent?: Continent;
    languages?: Language[];
};

export type Continent = {
    code: string;
    name?: string;
};

export type Language = {
    code: string;
    name?: string;
    native?: string;
};

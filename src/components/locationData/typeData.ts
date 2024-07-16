export interface ICountries{
    id:number,
    name:string,
    capital:string,
    states:Istates[],
}

export interface Istates{
    id:number,
    name:string,
    cities:Icities[],
}

export interface Icities{
    id:number,
    name:string
}


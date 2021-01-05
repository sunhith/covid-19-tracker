export interface GlobalDataSummary{
    [key: string]: string | number | undefined | boolean,
    country ?: string , 
    confirmed ?: number , 
    deaths ?: number, 
    recovered ?:number , 
    active ?: number 
}
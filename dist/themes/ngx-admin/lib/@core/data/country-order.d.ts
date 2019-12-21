import { Observable } from 'rxjs';
export declare abstract class CountryOrderData {
    abstract getCountriesCategories(): Observable<string[]>;
    abstract getCountriesCategoriesData(country: string): Observable<number[]>;
}

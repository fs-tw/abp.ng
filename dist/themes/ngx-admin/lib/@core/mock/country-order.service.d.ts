import { Observable } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
export declare class CountryOrderService extends CountryOrderData {
    private countriesCategories;
    private countriesCategoriesLength;
    private generateRandomData;
    getCountriesCategories(): Observable<string[]>;
    getCountriesCategoriesData(country: string): Observable<number[]>;
}

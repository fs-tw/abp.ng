import { PipeTransform } from '@angular/core';
export declare class PluralPipe implements PipeTransform {
    transform(input: number, label: string, pluralLabel?: string): string;
}

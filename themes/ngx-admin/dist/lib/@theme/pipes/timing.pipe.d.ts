import { PipeTransform } from '@angular/core';
export declare class TimingPipe implements PipeTransform {
    transform(time: number): string;
    private initZero;
}

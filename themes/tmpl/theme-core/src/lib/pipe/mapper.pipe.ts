import { Injectable, Pipe, PipeTransform } from '@angular/core';
//mapper to pure object include property getter
@Injectable()
@Pipe({
    name: 'mapper',
})
export class MapperPipe implements PipeTransform {
    constructor() { }
    transform(obj: any): any {
        let copyObj=Reflect.ownKeys(Reflect.getPrototypeOf(obj)).reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
          }, {});
          return copyObj;
    }
}
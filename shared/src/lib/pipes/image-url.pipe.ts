import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrlTemp'
})
export class ImageUrlTempPipe implements PipeTransform {
  transform(value: string): string {
    if(value.startsWith("data:")) return value;
    else {
       return value+'?n='+this.getRandom(100,500); 
    }
  }

  
  getRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
  };
}

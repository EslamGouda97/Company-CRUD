import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArray'
})
export class SliceArrayPipe implements PipeTransform {

  transform(array:any[]): any[] {

    return array.filter(item => item.name.startsWith('A'));
  }

}

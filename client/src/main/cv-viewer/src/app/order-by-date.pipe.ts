import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(array: any, prop: any): any {
    return array == null ? array : array.sort((a, b) => new Date(a[prop]) < new Date(b[prop]) ? 1 : new Date(a[prop]) === new Date(b[prop]) ? 0 : -1);
  }

}
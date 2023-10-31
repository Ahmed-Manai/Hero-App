import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length?: number, message?: string): unknown {
    if (!length){
      length = 20;
    }
    return message +" : "+ value.substring(0, length);
  }

}

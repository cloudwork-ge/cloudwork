import { Pipe, PipeTransform } from '@angular/core';
import { Calendar } from '../common/calendar';

@Pipe({
  name: 'geodate'
})
export class GeoDatePipe implements PipeTransform {
  constructor(private calendar:Calendar) {}
  transform(value: string, ...args: string[]): string {
    return this.calendar.toDate(value);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const hrs = Math.floor(value / 3600);
    const mins = Math.floor((value % 3600) / 60);
    const secs = value % 60;

    if (hrs > 0) {
      return `${hrs} hrs ${mins} mins`;
    } else if (mins > 0) {
      return `${mins} mins ${secs} secs`;
    } else {
      return `${secs} secs`;
    }
  }
}

import { NativeDateAdapter } from '@angular/material/core';


  export class UserDateAdapter extends NativeDateAdapter {
  parse(value: any): Date | null {
  //Your custom parse method 
  if ((typeof value === 'string') && (value.indexOf('/') > -1) && 
        value.length == 10) {
          const str = value.split('/');
          const year = Number(str[2]);
          const month = Number(str[0]) - 1;
          const date = Number(str[1]);
          return new Date(year, month, date);
    } else {
          return new Date(undefined);
    }
  }
}

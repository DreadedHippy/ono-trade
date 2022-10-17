import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {


  constructor() { }
  timeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };


  toDate(arg){ //CONVERT RAW DATE TO REGULAR, UNDERSTANDABLE DATE
    let rawDate = new Date(arg)
    return rawDate.toLocaleDateString('en-US', this.timeFormat)
  }

  getMethodColor(method){
    switch(method){
      case 'ppl':
        return 'berry';
      case 'zel':
        return 'secondary';
      case 'pst':
        return 'success';
      default:
        return 'primary';
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(value: any): any {
    
    let currentYear:any = new Date().getFullYear();
    let studentBirthYear = new Date(value).getFullYear();
    let studentAge = currentYear - studentBirthYear;
    return studentAge;
  }

}

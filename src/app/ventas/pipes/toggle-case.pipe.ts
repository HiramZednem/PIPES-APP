import { Pipe, PipeTransform } from '@angular/core';


// hiram | toggleCase = HIRAM
// HIRAM | toggleCase = hiram
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }

}

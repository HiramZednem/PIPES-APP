import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower: string = 'hiram';
  nombreUpper: string = 'HIRAM';
  nombreCompleto: string = 'hiRAm MENdeZ';

  fecha: Date = new Date();
}

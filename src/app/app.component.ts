import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'hirAm MenDeZ';

  gogo: string = 'BroDely ToVAR';
  profesionGogo: string = 'Mampo profesional';
  biografia: string = 'Este viejo cachondo hijo de puta coje como un toro ¡Sin usar pastillas!';

  mostrarNombre() {
    console.log(this.nombre);
  }
}

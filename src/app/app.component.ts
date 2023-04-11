import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'hirAm MenDeZ';

  mostrarNombre() {
    console.log(this.nombre);
  }
}

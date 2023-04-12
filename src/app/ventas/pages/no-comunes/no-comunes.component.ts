import { Component } from '@angular/core';
import { persona } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  //i18nSelect
  private _personas: persona[] = [
    {nombre:'Roque',genero:'masculino'},
    {nombre:'Mara',genero:'femenino'},
    {nombre:'Mamprodely',genero:'masculino'},
    {nombre:'Hiram',genero:'masculino'}
  ];

  private _personaActual: number = 0;
  nombreActual: string = this._personas[0].nombre;
  generoActual: string = this._personas[1].genero;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Juan','Brodely', 'Axel'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(): void {
    if (this._personaActual === this._personas.length-1){
      this._personaActual = 0;
    }else {
      this._personaActual++;
    }
    this.nombreActual = this._personas[this._personaActual].nombre;
    this.generoActual = this._personas[this._personaActual].genero;
  }

  borrarCliente(): void {
    this.clientes.pop();
  }
}

import { Component } from '@angular/core';
import { persona } from '../../interfaces/persona.interface';
import { interval } from 'rxjs';
import { resolve } from '@angular/compiler-cli';

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

  //keywalue
  persona = {
    nombre: 'Hiram',
    edad: 19,
    direccion: 'Chiapas, Mexico'
  }

  //JsonPipe
  heroes = [{
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }]

  //Async Pipe
  miObservable = interval(1000); // esto crea un observe que emite 1, 2, 3, 4 cada segundo

  valorPromesa = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve('tenemos data de promesa')
    },3500)
  });
}

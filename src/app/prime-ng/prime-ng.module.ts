import { NgModule } from '@angular/core';

//PrimeNg
//NOTA: Es buena practica si se tienen varias importaciones de una misma libreria, ordenarlos de manera alfabetica
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }

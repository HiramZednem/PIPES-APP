import { NgModule } from '@angular/core';

//PrimeNg
//NOTA: Es buena practica si se tienen varias importaciones de una misma libreria, ordenarlos de manera alfabetica
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }

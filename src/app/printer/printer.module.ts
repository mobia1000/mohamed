import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrinterRoutingModule } from './printer-routing.module';
import { PersonnelComponent } from './personnel/personnel.component';
import { ChantierComponent } from './chantier/chantier.component';
import { RapportComponent } from './rapport/rapport.component';
import { DemandeComponent } from './demande/demande.component';
import { PrinterComponent } from './printer.component';


@NgModule({
  declarations: [PersonnelComponent, ChantierComponent, RapportComponent, DemandeComponent, PrinterComponent],
  imports: [
    CommonModule,
    PrinterRoutingModule,
    
  ]
})
export class PrinterModule { }

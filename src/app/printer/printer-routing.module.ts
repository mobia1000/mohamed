import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './personnel/personnel.component';
import { PrinterComponent } from './printer.component';


const routes: Routes = [
  {path:'' ,component:PrinterComponent , children:[
    { path :'personnel' , component:PersonnelComponent},
    { path :'chantier' , component:PersonnelComponent},
    { path :'demande' , component:PersonnelComponent},
    { path :'rapport' , component:PersonnelComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinterRoutingModule { }

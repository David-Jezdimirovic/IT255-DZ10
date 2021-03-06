import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from '../stranice/pocetna/pocetna.component';
import { SobeComponent } from '../stranice/sobe/sobe.component';
import { PretragaSobaComponent } from '../stranice/pretraga/pretraga.soba.component';
import { KontaktComponent } from '../stranice/kontakt/kontakt.component';

const routes: Routes = [
   //{ path: '', component: PocetnaComponent}, //index stranica
   { path: '', redirectTo: 'pocetna', pathMatch: 'full'}, // redirekcija na pocetnu stranicu
   { path: 'pocetna', component: PocetnaComponent },
   { path: 'sobe', component: SobeComponent },
   { path: 'pretraga', component: PretragaSobaComponent },
   { path: 'kontakt', component: KontaktComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class RoutingModule { }

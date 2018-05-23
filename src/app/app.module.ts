import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { SobeComponent } from './stranice/sobe/sobe.component';
import { KontaktComponent } from './stranice/kontakt/kontakt.component';
import { PretragaSobaComponent } from './stranice/pretraga/pretraga.soba.component';
import { FormsModule } from '@angular/forms';
import { SearchpipePipe } from './pipes/search';
import { SortPipe } from './pipes/sort';
import { RoutingModule } from './routing/routing.module';




@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    SobeComponent,
    KontaktComponent,
    PretragaSobaComponent,
    SearchpipePipe,
    SortPipe
    

    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RoutingModule
 
  ],
  providers: [],
  exports: [SearchpipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

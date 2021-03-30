import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { BateauComponent } from './bateau/bateau.component';
import { FlotteComponent } from './flotte/flotte.component';
import { GalerieComponent } from './galerie/galerie.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AccueilHeaderComponent } from './accueil-header/accueil-header.component';
import { BateauDetailComponent } from './bateau-detail/bateau-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BateauComponent,
    FlotteComponent,
    GalerieComponent,
    MenuBarComponent,
    AccueilHeaderComponent,
    BateauDetailComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: AccueilComponent },
      { path: "galerie", component: GalerieComponent },
      { path: "bateaux", component: FlotteComponent },
      { path: "bateaux/:bateauId", component: BateauComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

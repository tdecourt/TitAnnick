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
import { MeteoComponent } from './meteo/meteo.component';
import { MapComponent } from './map/map.component';
import { BateauDetailComponent } from './bateau-detail/bateau-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BateauComponent,
    FlotteComponent,
    GalerieComponent,
    MenuBarComponent,
    AccueilHeaderComponent,
    BateauDetailComponent,
    MeteoComponent,
    MapComponent
  ],

  imports: [
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: AccueilComponent },
      { path: "galerie", component: GalerieComponent },
      { path: "bateaux", component: FlotteComponent },
      { path: "bateaux/:bateauId", component: BateauComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

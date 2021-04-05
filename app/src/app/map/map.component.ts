import { environment } from './../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { BateauService } from '../bateau.service'
import { Bateau } from '../bateau'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  bateaux: Bateau[] = [];
  public map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 46.15137898048418;
  lng = -1.1517083655435074;


    constructor(
        private bateauService: BateauService
    ) {}

  ngOnInit(): void {
    
    this.getBateaux();

    // @ts-ignore
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(environment.mapbox.accessToken);

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.151727177766666, 46.15118079445611],
      zoom: 16
    });



    let geojson = {
      'type': 'FeatureCollection',
      'features': []
    };

    this.bateaux.forEach(bateau => {
      
      let marker  = {
        'type': 'Feature',
        'properties': {
          'nom': bateau.nom,
          'iconSize': [22, 22]
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [bateau.longitude, bateau.latitude]
        }
      }
      console.log(marker);


      // create a DOM element for the marker
      let el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage =
        "url(../assets/img/mapbox-icon.png)";
        
      el.style.width = marker.properties.iconSize[0] + 'px';
      el.style.height = marker.properties.iconSize[1] + 'px';
      el.style.backgroundSize = '100%';

      let estOuvert = bateau.estOuvert?"Ouvert":"Fermée";
      
      new mapboxgl.Marker(el)
        .setLngLat([marker.geometry.coordinates[0], marker.geometry.coordinates[1]])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<p><strong> nom du bateau : </strong><br>' + marker.properties.nom + '<br>' + estOuvert + '</p>'))
        .addTo(map);  
    });
  }

  getBateaux(): void {
    this.bateauService.getBateaux()
        .subscribe((bateaux: Bateau[]) => this.bateaux = bateaux);
  }
}


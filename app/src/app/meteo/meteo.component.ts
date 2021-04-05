import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  meteos : any;

  meteo : any;

  days: any;

  timestamp: any;

  constructor() { }

  ngOnInit(): void {

    window.fetch('https://api.openweathermap.org/data/2.5/onecall?lat=46,1667&lon=-1,15&units=metric&lang=fr&appid=11781be56525abb267357550d50e2abb')
      .then(res => res.json())
      .then(resJson => {

        console.log(resJson);

        this.days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        this.meteos = [];

        for (let i = 0; i < 7; i++) {

          this.timestamp = resJson.daily[i].dt;
          this.timestamp = new Date(this.timestamp * 1000);
          this.meteo = {
            "day" : this.days[this.timestamp.getDay()],
            "date" : this.timestamp.getDate(),
            "icon" : "http://openweathermap.org/img/wn/" + resJson.daily[i].weather[0].icon + "@2x.png",
            "weather" : resJson.daily[i].weather[0].description,
            "tempMin" : Math.round(resJson.daily[i].temp.night),
            "tempMax" : Math.round(resJson.daily[0].temp.day)
          }

          this.meteos.push(this.meteo);
        }
      })
  }
}

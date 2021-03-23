import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  imagePath_Boats = "app\src\img\boats.png";
  constructor() { }

  ngOnInit(): void {
  }

}

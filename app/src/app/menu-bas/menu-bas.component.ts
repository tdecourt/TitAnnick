import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bas',
  templateUrl: './menu-bas.component.html',
  styleUrls: ['./menu-bas.component.css']
})
export class MenuBasComponent implements OnInit {
  imagePath_Boats = "app\src\img\boats.png";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { bateaux } from "../bateaux";

@Component({
  selector: 'app-flotte',
  templateUrl: './flotte.component.html',
  styleUrls: ['./flotte.component.css']
})
export class FlotteComponent implements OnInit {
  bateaux = bateaux;
  constructor() {}

  ngOnInit() {}
}

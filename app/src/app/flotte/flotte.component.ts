import { Component, OnInit } from '@angular/core';
import { BATEAUX } from "../mock-bateaux";

@Component({
    selector: 'app-flotte',
    templateUrl: './flotte.component.html',
    styleUrls: ['./flotte.component.css']
})
export class FlotteComponent implements OnInit {
    bateaux = BATEAUX;
    constructor() {}

    ngOnInit() {}
}

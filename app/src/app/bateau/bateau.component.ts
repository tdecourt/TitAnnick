import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BATEAUX } from "../mock-bateaux";

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.component.html',
  styleUrls: ['./bateau.component.css']
})
export class BateauComponent implements OnInit {
  bateau: { id: number; nom: string; } | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const bateauIdFromRoute = Number(routeParams.get("bateauId"));

    // Find the product that correspond with the id provided in route.
    this.bateau = BATEAUX.find(bateau => bateau.id === bateauIdFromRoute);
  }
}
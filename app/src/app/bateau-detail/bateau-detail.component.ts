import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {Bateau} from '../bateau'
import { BateauService } from '../bateau.service';

@Component({
  selector: 'app-bateau-detail',
  templateUrl: './bateau-detail.component.html',
  styleUrls: ['./bateau-detail.component.css']
})
export class BateauDetailComponent implements OnInit {

  bateau: Bateau | undefined;
  

  constructor(  
    private route: ActivatedRoute,
    private bateauService: BateauService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getBateau();
  }

  getBateau(): void {
    const id = Number(this.route.snapshot.paramMap.get('bateauId'));
    this.bateauService.getBateau(id).subscribe(bateau => this.bateau = bateau);

  }

}

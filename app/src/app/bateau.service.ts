import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Bateau } from './bateau';
import { BATEAUX } from './mock-bateaux';

@Injectable({
  providedIn: 'root'
})
export class BateauService {

  constructor() { }

  getBateaux(): Observable<Bateau[]> {
    const bateaux = of(BATEAUX);
    return bateaux;
  }
}
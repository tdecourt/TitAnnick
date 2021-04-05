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

  getBateau(id: number): Observable<Bateau>{
    const bateau = BATEAUX.find(h => h.id === id) as Bateau;
    return of(hero);
  }
}


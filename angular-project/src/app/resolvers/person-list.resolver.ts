import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../shared/personne.service';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonListResolver implements Resolve<Personne[]> {

  constructor(private personneService: PersonneService, private router: Router) { }

  // Les Resolver d'Angular permettent d'attendre le
  // retour d'un observable avant d'initialiser / mettre à
  // jour un composant après une mise à jour de l'url.

  // Le Resolver est un service que l'on associe à la route du composant.
  
  resolve(): Observable<Personne[]> {
    return this.personneService.getAllPersons()
    .pipe(map(res => {
      console.log(res);
      return res || {} ;
    }),
      catchError(() => {
        this.router.navigate(['/error']);
        return EMPTY;
    }));   
  }
}

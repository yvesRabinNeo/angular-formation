import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  // L’URL qui sera utilisee par le client pour realiser des requetes HTTP
  url: string = 'http://localhost:5557/personnes/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Injecter le service HttpClient
  constructor(private http: HttpClient) { }

  // Recupère la liste de personnes
  
  // getAllPersons(){
  //   return this.http.get<Array<Personne>>(this.url);
  // }

  // fonction pipe() dans RxJS: Vous pouvez utiliser des pipe pour relier 
  // les opérateurs entre eux. Les pipes vous permettent de combiner 
  // plusieurs fonctions en une seule fonction.

  // catchError () - L'opérateur catchError examinera la valeur Observable et fera 
  // quelque chose avec cette valeur.

  getAllPersons(): Observable<Personne[]>{
    let API_URL = `${this.url}`;
    
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
   }

   //  addPerson(p: Personne) {    
   //   return this.http.post(this.url, p);
   //  }

   addPerson(data: Personne): Observable<Personne>{
     let API_URL = `${this.url}`;
     return this.http.post(API_URL, data)
       .pipe(
         catchError(this.errorMgmt)
       )
    }
    
  //  getPersonById(id: number) {
  //   return this.http.get(this.url + id);
  //  }
    
   getPersonById(id: number): Observable<Personne> {
    let API_URL = `${this.url}/${id}`;
     return this.http.get(API_URL, { headers: this.headers })
       .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
       )
   }
    
   deletePerson(id: any) {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL, { headers: this.headers })
    .pipe(
      catchError(this.errorMgmt)
    )
   }

   updatePerson(id: any, person: Personne): Observable<Personne> {
    let API_URL = `${this.url}/${id}`;
     return this.http.put(API_URL, person)
       .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
       )
   }

   // Gère les erreurs par rapport au coté serveur
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  
}

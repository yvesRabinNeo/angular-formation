import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private router: Router) {}

  tabs: any[] = [
    {
      title: 'Accueil',
      path: 'home'
    },
    {
      title: 'Adresse',
      path: 'adresse'
    }, 
    {
      title: 'Stagiaire',
      path: 'stagiaire'
    }, 
    {
      title: 'Template Form',
      path: 'template-driven'
    }, 
    {
      title: 'Reactive Form',
      path: 'reactive-form'
    }, 
    {
      title: 'Personne',
      path: 'personne'
    }, 
    {
      title: 'Material table',
      path: 'material-table'
    }, 
    {
      title: 'Camion',
      path: 'vehicule/camion'
    }, 
    {
      title: 'Voiture',
      path: 'vehicule/voiture'
    }
  ];

  logOut() {
    localStorage.removeItem('isConnected');
    this.router.navigate(['/home']);
  }

  isConnected() {
    if (Boolean(localStorage.getItem('isConnected')))
      return true;
    return false;
  }
}

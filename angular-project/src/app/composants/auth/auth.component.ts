import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  erreur = true;
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isAuthenticated() {
    if (this.username === 'John' && this.password === '1234') {
      localStorage.setItem('isConnected', 'true');
      this.router.navigateByUrl('/personne');
    } else {
      this.erreur = false;
    }
  }

}

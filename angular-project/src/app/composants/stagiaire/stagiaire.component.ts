import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: any;
  prenom: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Solutions pour le chemin de type chemin/nom/prenom

    // 1-Solution avec les snapshot (instatané)
    /**this.nom = this.route.snapshot.params.nom;
    this.prenom = this.route.snapshot.params.prenom;
    console.log(this.nom + ' ' + this.prenom);**/

    // 2-Solution avec les observables
    this.route.paramMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + ' ' + this.prenom);
    })

    //Solutions pour le chemin /stagiaire?nom=Wick&prenom=Doe

    // 1-Solution avec les snapshots

    /**this.nom = this.route.snapshot.queryParams.nom;
    this.prenom = this.route.snapshot.queryParams.prenom;
    console.log(this.nom + ' ' + this.prenom);**/

    // 1-Solution avec les observabls

    /**this.route.queryParamMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + ' ' + this.prenom);
    })**/
    
  }

}

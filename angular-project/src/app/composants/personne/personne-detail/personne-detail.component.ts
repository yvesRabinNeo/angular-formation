import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.css']
})
export class PersonneDetailComponent implements OnInit {

  id!: number;
  personne!: Personne;


  constructor(private route: ActivatedRoute,
              private personneService: PersonneService,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.personneService.getPersonById(this.id).subscribe(data => {
      this.personne = data;
    });

  }

  backToPersonList() {
    this.router.navigate(['/personne']);
  }

}

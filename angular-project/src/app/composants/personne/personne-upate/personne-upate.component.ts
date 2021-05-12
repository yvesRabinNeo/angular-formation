import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-upate',
  templateUrl: './personne-upate.component.html',
  styleUrls: ['./personne-upate.component.css']
})
export class PersonneUpateComponent implements OnInit {

  id!: number;
  personne: Personne = {};

  constructor(private route: ActivatedRoute,
              private personneService: PersonneService,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.personneService.getPersonById(this.id).subscribe(data => {
      this.personne = data;
    })
    console.log(this.personne)

  }

  updatePerson(myForm: NgForm) {
    this.personne = { ...this.personne};
    this.personneService.updatePerson(this.personne.id, this.personne).subscribe(data => {
      console.log(data);
      this.backToPersonList();
    });
  }

  backToPersonList() {
    this.router.navigate(['/personne']);
  }

}

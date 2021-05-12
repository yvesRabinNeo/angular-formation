import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personne: Personne = {};
  personnes: Array<Personne> = new Array<Personne>();

  constructor(private personneService: PersonneService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    // this.personneService.getAllPersons().subscribe(data => {
    //   this.personnes = data;
    // })

    this.route.data.subscribe(res => {
      console.log('Check route resolver data');
      console.log(res);
      this.personnes = res.routeResolver;
    })
  }

  savePerson() {
    this.personneService.addPerson(this.personne).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  personDetail(id: any) {
    this.router.navigate(['detail', id]);
  }

  deletePerson(id: any) {
    this.personneService.deletePerson(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  updatePerson(id: any) {
    this.router.navigate(['update', id]);
  }

}

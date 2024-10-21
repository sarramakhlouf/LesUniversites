import { Component, OnInit } from '@angular/core';
import { University } from '../model/university.model';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css'] // Correction ici
})
export class UniversitiesComponent implements OnInit // Correction de l'implémentation
{
  universities!: University[]; // Correction du type et commentaire retiré

  constructor(private UniversityService: UniversityService) { }

  ngOnInit(): void {
    this.universities = this.UniversityService.listeUniversities(); // Accès aux données lors de l'initialisation
  }

  supprimerUniversity(uni: University): void { // Correction du type
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.UniversityService.supprimerUniversity(uni);
    }
  }
}



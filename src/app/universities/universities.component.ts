import { Component } from '@angular/core';
import { university } from '../model/university.model';
import { UniversityService } from '../services/university.service';


@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.css'
})
export class UniversitiesComponent //implements OnInit// 
{
  
  universities : university[]; //un tableau de Produit
  constructor(private UniversityService: UniversityService ) {
    this.universities = UniversityService.listeUniversities();
  }
  supprimerUniversity(uni: university)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    {
      this.UniversityService.supprimerUniversity(uni);
    }
  }
}


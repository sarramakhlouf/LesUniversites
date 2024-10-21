import { Component } from '@angular/core';
import { University} from '../model/university.model';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent {
  universities!: University[];
  nomUniversity!: string;
  allUniversities! : University[];
  searchTerm!: string;

  
  constructor(private universityService: UniversityService) {}
  ngOnInit(): void {
    this.universities=this.universityService.listeUniversities() ;
  }
  onKeyUp(filterText: string) {
    this.universities = this.allUniversities.filter(item =>
      item.nomUni.toLowerCase().includes(filterText));
  }
    
    

}

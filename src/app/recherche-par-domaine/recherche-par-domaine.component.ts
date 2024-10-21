import { Component, OnInit } from '@angular/core';
import { University } from '../model/university.model';
import { Domaine } from '../model/Domaine.model';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-recherche-par-domaine',
  templateUrl: './recherche-par-domaine.component.html',
  styleUrls: ['./recherche-par-domaine.component.css']
})
export class RechercheParDomaineComponent implements OnInit {
  universities!: University[];
  IdDomaine!: number;
  domaines: Domaine[] = [];

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {} 
  onChange() {
    this.universities =
      this.universityService.rechercherParDomaine(this.IdDomaine);
  }

}



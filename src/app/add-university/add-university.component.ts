import { Component } from '@angular/core';
import { university } from '../model/university.model';
import { UniversityService } from '../services/university.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Domaine } from '../model/Domaine.model';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrl: './add-university.component.css'
})
export class AddUniversityComponent //implements OnInit 
{
  newUni = new university();
  domaines! : Domaine[];
  newIdDom! : number;
  newDomaine! : Domaine;
  updatedDomId! : number;

  constructor(private UniversityService: UniversityService,
    private router :Router,
    private activatedRoute: ActivatedRoute,) { }
  
  ngOnInit(): void {
    // Charger les domaines depuis le service
    this.domaines = this.UniversityService.listeDomaines();
    // Vérifier si l'ID de l'université est fourni dans les paramètres d'URL (mode édition)
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
    // Si un ID est présent, récupérer les informations de l'université à modifier
      this.newUni = this.UniversityService.consulterUniversity(id);
      this.updatedDomId = this.newUni.domaine.idDom;  // Préremplir le domaine actuel
    }
  }
  addUniversity(): void {
    // Récupérer l'objet du domaine sélectionné à partir de l'ID
    this.newUni.domaine = this.UniversityService.consulterDomaines(this.newIdDom);
    if (this.newUni.domaine) {
      // Ajouter ou mettre à jour l'université via le service
      this.UniversityService.ajouterUniversity(this.newUni);
      // Naviguer vers la liste des universités après l'ajout ou la mise à jour
      this.router.navigate(['universities']);
    }
  }
}

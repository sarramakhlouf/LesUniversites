import { Component } from '@angular/core';
import { university } from '../model/university.model';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrl: './add-university.component.css'
})
export class AddUniversityComponent //implements OnInit 
{
   newUni = new university();

   constructor(private UniversityService: UniversityService) { }
   addUniversity(){
    this.UniversityService.ajouterUniversity(this.newUni);
   }
}

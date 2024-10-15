import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from '../services/university.service';
import { university } from '../model/university.model';
import { Domaine } from '../model/Domaine.model';
@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styles: []
})
export class UpdateUniversityComponent implements OnInit {
  currentUniversity= new university();
  domaines! : Domaine[];
  updatedDomId! : number;


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private universityService: UniversityService) { }


  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.domaines = this.universityService.listeDomaines();
    this.currentUniversity=this.universityService.consulterUniversity(this.activatedRoute.snapshot.params['id'])
    console.log(this.currentUniversity);
    //this.currentUniversity = this.universityService.consulterDomaines(this.activatedRoute.snapshot.params['id']);
    this.updatedDomId=this.currentUniversity.domaine.idDom;
    }   
  updateUniversity()
  {
    this.currentUniversity.domaine=this.universityService.consulterDomaines(this.updatedDomId);
    this.universityService.updateUniversity(this.currentUniversity);
    this.router.navigate(['universities']);
  } 
}


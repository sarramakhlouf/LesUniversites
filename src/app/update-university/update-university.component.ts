import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from '../services/university.service';
import { university } from '../model/university.model';
@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styles: []
})
export class UpdateUniversityComponent implements OnInit {
  currentUniversity=new university();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private universityService: UniversityService) { }


  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentUniversity=this.universityService.consulterUniversity(this.activatedRoute.snapshot.params['id'])
    console.log(this.currentUniversity);
  }
  updateUniversity()
  { //console.log(this.currentUniversity);
    this.universityService.updateUniversity(this.currentUniversity);
    this.router.navigate(['Universities']);
  } 
}


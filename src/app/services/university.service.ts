import { Injectable } from '@angular/core';
import { university } from '../model/university.model';
@Injectable({
providedIn: 'root'
})
export class UniversityService {
  universities : university[];
 
  constructor() {
    this.universities= [
      { idUni : 1, nomUni : "Iset", adresseUni : "Nabeul", dateCreation: new Date("01/14/2011"), nombreEtudiants : 2000},
      { idUni : 2, nomUni : "Ihec", adresseUni : "Carthage", dateCreation : new Date("12/17/2010"), nombreEtudiants : 1000},
      { idUni : 3, nomUni :"Issam", adresseUni : "Manouba", dateCreation : new Date("02/20/2020"), nombreEtudiants : 5000}
    ];
  }
  listeUniversities():university[] {
    return this.universities;
  }
  ajouterUniversity( uni: university){
    this.universities.push(uni);
  }
  supprimerUniversity( uni: university){
    const index = this.universities.indexOf(uni, 0);
    if (index > -1) {
    this.universities.splice(index, 1);
    } 
  } 
  consulterUniversity(id:number): university{
    return this.universities.find(p => p.idUni == id)!;
  } 
  updateUniversity(uni:university)
  {
    // console.log(p);
    this.supprimerUniversity(uni);
    this.ajouterUniversity(uni);
    this.trierUniversities();
  } 
  trierUniversities(){
    this.universities = this.universities.sort((n1,n2) => {
      if (n1.idUni! > n2.idUni!) {
        return 1;
      }
      if (n1.idUni! < n2.idUni!) {
        return -1;
      }
      return 0;
    });
  }
    
}

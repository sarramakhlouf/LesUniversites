import { Injectable } from '@angular/core';
import { university } from '../model/university.model';
import { Domaine } from '../model/Domaine.model';
@Injectable({
providedIn: 'root'
})
export class UniversityService {
  universities : university[];
  domaines : Domaine[];

 
  constructor() {
    this.domaines = [ {idDom : 1, nomDom : "Technologies d'Informatique "},
                      {idDom : 2, nomDom : "Lettres et langues"},
                      {idDom : 3, nomDom : "Santé"},
                      {idDom : 4, nomDom : "Economie et gestion"},
                    ];
    this.universities= [
      { idUni : 1, nomUni : "Iset", adresseUni : "Nabeul", dateCreation: new Date("01/14/2011"), nombreEtudiants : 2000, domaine: {idDom : 1, nomDom : "Technologies d'Informatique"}},
      { idUni : 2, nomUni : "Ihec", adresseUni : "Carthage", dateCreation : new Date("12/17/2010"), nombreEtudiants : 1000, domaine : {idDom : 4, nomDom : "Economie et gestion"}},
      { idUni : 3, nomUni :"Université centrale", adresseUni : "Tunis", dateCreation : new Date("02/20/2020"), nombreEtudiants : 5000,domaine : {idDom : 3, nomDom : "Santé"}}
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
  listeDomaines():Domaine[] {
    return this.domaines;
  }
  consulterDomaines(id:number): Domaine{ 
    return this.domaines.find(Dom => Dom.idDom == id)!;
    }
    
}

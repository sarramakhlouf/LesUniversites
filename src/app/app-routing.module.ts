import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';

const routes: Routes = [
  {path: "universities", component : UniversitiesComponent},
  {path: "add-university", component : AddUniversityComponent},
  {path: "updateUniversity/:id", component: UpdateUniversityComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

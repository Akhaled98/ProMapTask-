import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddEditProjectComponent } from './components/home/add-edit-project/add-edit-project.component';


const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'addProjects', component:AddEditProjectComponent},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

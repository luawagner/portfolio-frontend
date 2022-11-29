import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/myprojects/edit-project/edit-project.component';
import { NewProjectComponent } from './components/myprojects/new-project/new-project.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevoproyecto', component: NewProjectComponent},
  {path: 'editarproyecto/:id', component: EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

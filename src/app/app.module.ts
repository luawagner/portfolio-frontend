import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/about/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { CardprojectComponent } from './components/myprojects/cardproject/cardproject.component';
import { RedesComponent } from './components/redes/redes.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor.service';
import { NewProjectComponent } from './components/myprojects/new-project/new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    MyprojectsComponent,
    CardprojectComponent,
    RedesComponent,
    SaludoComponent,
    HomeComponent,
    LoginComponent,
    NewProjectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

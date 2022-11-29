import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { SProjectService } from 'src/app/service/s-project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cardproject',
  templateUrl: './cardproject.component.html',
  styleUrls: ['./cardproject.component.css']
})
export class CardprojectComponent implements OnInit {
project : Project[] = [];
  constructor(private sProject: SProjectService, private tokenService : TokenService) { }
isLogged= false;
  ngOnInit(): void {
    this.cargarProject();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProject(): void{
    this.sProject.lista().subscribe(data =>{this.project = data})
  }

}

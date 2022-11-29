import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { SProjectService } from 'src/app/service/s-project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
project: Project = null;

  constructor(private sProject: SProjectService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProject.detail(id).subscribe(
      data =>{
        this.project = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }
onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.sProject.update(id, this.project).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar proyecto");
        this.router.navigate(['']);
    }
  )
}


}

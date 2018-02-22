import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../projects.service";
import {ProjectModel} from "../project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  display = 'none';
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.onClickProjectEvent
      .subscribe(
        (project: ProjectModel) => {
          this.display = 'block';
        });

  }

  onClose() {
    this.display = 'none';
  }
}

import { Component, OnInit } from '@angular/core';
import {ProjectModel} from './project.model';
import {ProjectsService} from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {


  projects: ProjectModel[];
  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectService.loadProjects();
  }

  filter(condition: string) {
    this.projects = this.projectService.getProjects(condition);
  }
  projectOnClick(project: ProjectModel) {
    console.log('asdsa');
    this.projectService.onClickProject(project);

  }

}

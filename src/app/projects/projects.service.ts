import {EventEmitter, Injectable} from '@angular/core';
import {ProjectModel} from './project.model';

@Injectable()
export class ProjectsService {

  projects: ProjectModel[] = [];

  onClickProjectEvent = new EventEmitter<ProjectModel>() ;

  onClickProject(project: ProjectModel) {
    this.onClickProjectEvent.emit(project);
  }

  loadProjects() {
    let project = new ProjectModel('Healthcare Management System',
                                    'To facilitate doctors and service desk personnel to manage healthcare needs.',
                                    'Platform for the healthcare specialists to store information, ping alerts, ' +
                                    'save patient and doctor details, send emergency messages and more.',
                                    'Java, Html, CSS, JQuery, JavaScript, AJAX,Spring MVC, Hiberenate, Junit',
                                    'N/A',
                                    'N/A',
                                    'FullStack');
    this.projects.push(project);
    project = new ProjectModel('Implementation of Neural Networks in R',
      'To predict whether a new person will take term loan in the bank or not.\n' +
      'and the dataset used is - marketing campaigns of a Portuguese.',
      'This data consists of several records where each record consists of a\n' +
      'information (age, job, marital, etc.) specific to a customer.\n' +
      'To learn from the given data (60% of data by default) and then to predict some unseen\n' +
      'data with the network (Learning Stage), We built a neural network (multi-layer perceptron) of\n' +
      'our own using R language. We also achieved an accuracy of around 88% both on training and\n' +
      'testing with a difference of 0.5% around.',
      'R, Neural Networks',
      'N/A',
      'N/A', 'Datascience');

    this.projects.push(project);

    project = new ProjectModel('Phi Beta Lambda Clothing Closet',
      'To design a web-based application that sells donated “gently used” and new clothing articles for men and women. ',
      ' Implemented two different user Interface, one for the Admin and Members, the\n' +
      'other open to public for viewing and purchasing the clothes.',
      'Html, CSS, Javascript, PHP, Bootstrap, MySql',
      'N/A',
      'N/A', 'FullStack');
    this.projects.push(project);

    project = new ProjectModel('TedX University Event',
      'N/A',
      'Developed a web application used to publicize the event and allow students to register for the event.',
      'HTML,CSS, JavaScript, Bootstrap, PHP Mysql',
      'N/A',
      'N/A', 'FullStack');
    this.projects.push(project);

    project = new ProjectModel('CampusConnect',
      'Provides an opportunity for students to get updated about intra collage activities.',
      'This application updates the students about the activities ,events happening around the campus . ' +
      'It gives a tribune to the clubs, the teams and the associations of college as well as serves the needs of ' +
      'students seeking information based on their interest and requirements.',
      'Html, CSS, JQuery, Bootstrap',
      'N/A',
      'N/A', 'FullStack');
    this.projects.push(project);

    project = new ProjectModel('Surprise Test Application - Android based application',
      'To facilitate students take the test on android powered devices.',
      'The Surprise Test app is a hybrid application used to conduct tests on an android powered device - Aakash tablet. ' +
      'This application is directly linked with the server. Any number of students can take this test simultaneously.',
      'Java, HTML, CSS, Javascript, Android, AndroidStudio ',
      'N/A',
      'N/A', 'Android');
    this.projects.push(project);

    return this.projects;
  }

  getProjects(condition: string) {
    if (condition === 'all') {
      return this.projects;
    }
    let filteredProjects: ProjectModel[] = [];
    console.log(filteredProjects);
    for (let project of this.projects) {
      if (project.type === condition) {
        filteredProjects.push(project);
      }
    }
    console.log(filteredProjects);
    return filteredProjects;
  }
}

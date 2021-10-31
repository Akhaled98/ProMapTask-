import {Component, OnInit} from '@angular/core';
import {Project} from 'src/app/shared/models/project.model';
import {ProjectsService} from '../../shared/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projectList: Project[] = [];
  currentProject: Project = {};
  isEdit: boolean = false;

  constructor(private projectsService: ProjectsService) {
  }


  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList() {
    this.projectsService.getProjects().subscribe((response) => {
      this.projectList = response;
    })
  }

  addProject() {
    this.isEdit = false;
  }

  updateProject(actionEvent: { action: string, project: Project }) {
    if (actionEvent.action === 'delete') {
      this.deleteProject(actionEvent.project);
    } else {
      this.isEdit = true;
      this.currentProject = actionEvent.project;
    }
  }

  deleteProject(project: Project) {
    this.projectsService.deleteProjects(project.id || 0).subscribe(() => {
      this.getProjectList();
    });
  }

  applyAddEdit(addEditEvent: { project: Project }) {
    if (this.isEdit) {
      this.projectsService.updateProject(addEditEvent.project).subscribe(() => {
        this.getProjectList();
      });
    } else {
      this.projectsService.addProject(addEditEvent.project).subscribe(() => {
        this.getProjectList();
      });
    }

  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/shared/models/project.model';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  @Input() projectList: Project[] = [];

  @Output() actionEventEmitter: EventEmitter<{ action: string ,project: Project }> = new EventEmitter();


  constructor() {}

  ngOnInit(): void {
  }

  deleteProject(project: Project) {
    this.actionEventEmitter.emit({ action: 'delete' ,project: project });
  }

  updateProject(project: Project) {
    this.actionEventEmitter.emit({ action: 'update' ,project: project });
  }

}

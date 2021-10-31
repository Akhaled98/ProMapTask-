import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  BASE_URL="http://localhost:3000/projects";
  constructor(private _HttpClient: HttpClient) { }

  addProject(project:Project): Observable<any> {
    return this._HttpClient.post(this.BASE_URL, project);
  }


  getProjects(): Observable<Project[]> {
    return this._HttpClient.get<Project[]>(this.BASE_URL);
  }

  deleteProjects(id: number): Observable<any> {
    return this._HttpClient.delete(this.BASE_URL+`/${id}`);
  }
  updateProject(project:Project): Observable<any> {
    return this._HttpClient.put(this.BASE_URL+`/${project.id}`,project);
  }
}

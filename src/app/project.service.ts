import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './projects';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly url = 'http://localhost:3000/projects';
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.url);
  }
}

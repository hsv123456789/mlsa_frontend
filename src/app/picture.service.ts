import { Injectable } from '@angular/core';
import { Picture } from './picture';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PictureService {
  readonly url = 'http://localhost:3000/pictures';
  constructor(private http: HttpClient) {}
  getAllProfiles(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  readonly url = 'http://localhost:3000/blogs';
  constructor(private http: HttpClient) {}
  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url);
  }
}

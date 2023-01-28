import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  constructor(private blogservice: BlogService) {}
  blog: Blog[];
  up() {
    document.getElementById('high')?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.blogservice.getAllBlogs().subscribe((data) => {
      this.blog = data;
      console.log(this.blog);
    });
  }
}

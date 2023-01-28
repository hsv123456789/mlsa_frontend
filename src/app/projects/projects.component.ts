import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Projects } from '../projects';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private project: ProjectService) {}
  projects: Projects[];
  up() {
    document.getElementById('Domain')?.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit(): void {
    this.project.getAllProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}

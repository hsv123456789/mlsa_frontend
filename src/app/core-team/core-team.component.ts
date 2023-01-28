import { Component } from '@angular/core';

@Component({
  selector: 'app-core-team',
  templateUrl: './core-team.component.html',
  styleUrls: ['./core-team.component.css'],
})
export class CoreTeamComponent {
  up() {
    document.getElementById('high')?.scrollIntoView({ behavior: 'smooth' });
  }
}

import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll('.card') as any, {
      max: 25,
      speed: 400,
      scale: 1.1,
      glare: true,
      'max-glare': 1,
    });
  }
}

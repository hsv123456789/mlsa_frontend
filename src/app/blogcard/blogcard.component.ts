import { Component, Input } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css'],
})
export class BlogcardComponent {
  @Input() i: Blog = new Blog('', '', '', '', '');
  @Input() num: Number;
  modalId: string;

  ngOnInit(): void {
    this.modalId = Math.random().toString(36).substring(2, 7);
  }
}

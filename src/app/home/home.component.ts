import { ICourse } from './../ICourse';
import { courses } from './../objects';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  courses: Array<ICourse> = courses;

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('CodeBakery');
  }
}

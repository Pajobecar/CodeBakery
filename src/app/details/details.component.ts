import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ICourse } from '../ICourse';
import { courses } from '../objects';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  newCourses: Array<ICourse> = courses;

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Details');
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ICourse } from '../ICourse';
import { courses } from '../objects';
import { CartService } from '../cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  details: ICourse = {} as ICourse;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private cs: CartService,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.details = courses[this.id];
    });

    this.title.setTitle(this.details.name);
  }

  addToCart(par: ICourse) {
    this.cs.addToCart(par);
  }
}

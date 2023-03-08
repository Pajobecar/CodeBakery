import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  OperatorFunction,
} from 'rxjs';
import { CartService } from '../cart.service';
import { ICourse } from '../ICourse';
import { courses } from '../objects';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, DoCheck {
  formatter = (course: ICourse) => course.name;
  number: number = 0;
  public model: any;
  isNavbarCollapsed = true;

  constructor(private CS: CartService, private router: Router) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.number = this.CS.getLength();
  }

  goToDetails(event: any) {
    const index = courses.map((course) => course.name).indexOf(event.item.name);
    this.router.navigate(['/details/', index]);
  }

  search: OperatorFunction<string, readonly ICourse[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 1
          ? []
          : courses
              .filter(
                (course) =>
                  course.name.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );
}

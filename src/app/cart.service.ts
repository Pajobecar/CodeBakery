import { Injectable } from '@angular/core';
import { ICourse } from './ICourse';
import { IUser } from './IUser';
import { courses } from './objects';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICourse[] = [];
  customer: IUser | undefined;

  constructor() {}

  addToCart(addedCourse: ICourse) {
    this.items.push(addedCourse);
    const index = courses
      .map((course: ICourse) => course.name)
      .indexOf(addedCourse.name);
    courses[index].inCart = true;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getLength() {
    return this.items.length;
  }

  removeFromCart(i: number) {
    const removedCourse = this.items.splice(i, 1);
    const index = courses
      .map((course: ICourse) => course.name)
      .indexOf(removedCourse[0].name);
    courses[index].inCart = false;
  }
}

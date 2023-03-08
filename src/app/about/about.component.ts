import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trainers, Trainer } from './trainers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  trainers: Array<Trainer> = trainers;

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('About');
  }
}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  options: google.maps.MapOptions = {
    center: { lat: 48.21035, lng: 16.3748 },
    zoom: 12,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition: google.maps.LatLngLiteral = {
    lat: 48.21035,
    lng: 16.3748,
  };

  constructor(private title: Title) {
    this.title.setTitle('Contact');
  }
}

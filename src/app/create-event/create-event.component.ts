import { EventService } from './../shared/event.service';
import { IEvent } from './../shared/event.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  newEventForm;
  newEvent;

  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    this.newEvent = {
      id: 100,
      name: 'Angut',
      date: new Date('08/08/2080'),
      time: '10am',
      price: 55,
      imageUrl: 'aaaaa',
      location: {
        address: 'haydaristan',
        city: ' city',
        country: 'dddd',
      },
      onlineUrl: 'string',
    };
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues): void {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
    this.isDirty = false;
    console.log('formValues', formValues);
  }
}

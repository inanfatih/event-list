import { IEvent } from './../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../common/toastr.service';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  handleEventClicked(event: any): void {
    console.log(event);
  }

  ngOnInit(): void {
    // this.events = this.eventService
    //   .getEvents()
    //   .subscribe((events) => (this.events = events));
    this.events = this.route.snapshot.data.serafettin;
    console.log('serafettin', this.route);
  }
  handleThumbnailClick(eventName): any {
    this.toastr.success(eventName);
  }
}

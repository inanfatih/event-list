import { IEvent } from './../shared/event.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();
  someProperty: any = 'some property';

  constructor() {}

  ngOnInit(): void {}

  handleClickMe(): void {
    this.eventClick.emit(this.event.name);
  }
  logFoo(): void {
    console.log('foo');
  }

  getStartTimeClassInObject(): any {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }

  getStartTimeClassAsText(): any {
    if (this.event && this.event.time === '8:00 am') {
      return 'green bold';
    }
    return '';
  }
  getStartTimeClassAsArray(): any {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }
}

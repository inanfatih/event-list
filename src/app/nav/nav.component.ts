import { EventService } from './../shared/event.service';
import { ISession } from './../shared/event.model';
import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession;
  constructor(public auth: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm): any {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
  ngOnInit(): void {}
}

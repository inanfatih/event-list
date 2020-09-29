import { JQ_TOKEN } from './common/jQuery.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventRouteActivatorService,
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  NavComponent,
  HaydarComponent,
  Error404Component,
} from './exports';

import { RoutesRoutingModule } from './routes';
import { AppComponent } from './app.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DurationPipe } from './duration.pipe';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

// tslint:disable-next-line: no-string-literal
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    HaydarComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  imports: [
    BrowserModule,
    RoutesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventRouteActivatorService,
    { provide: JQ_TOKEN, useValue: jQuery },
    // Asagidakiyle yukaridaki ayni anlama geliyor.
    // { provide: EventRouteActivatorService, useValue: EventRouteActivatorService},
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent): any {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { HaydarComponent } from './haydar/haydar.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, EventListComponent, EventThumbnailComponent, HaydarComponent, NavComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

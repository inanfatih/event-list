import { EventListResolverService } from './event-list-resolver.service';
import { EventRouteActivatorService } from './event-details/event-route-activator.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventListComponent,
    // asagidaki resolve ile EventListResolverService'i cagir ve sonucunu serafettin'e ata diyoruz.
    // resolver'i bize bir observable donecek sekilde kurmustuk.
    resolve: { serafettin: EventListResolverService },
  },
  { path: '404', component: Error404Component },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },

  // { path: '', redirectTo: '/events', pathMatch: 'prefix' }, ===> Prefix ile path bu sekilde baslarsa yonlendir demis oluyoruz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}

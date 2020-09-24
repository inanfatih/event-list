import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EventListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  // resolver ile data hazir olmadan component'in yuklenmemesini sagliyoruz.

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    // Asagida subscribe olmuyoruz. Onun yerine pipe kullaniyoruz. Bunun sebebi resolver'in bir observable donmesi gerekiyor.
    // subscribe kullanirsak bir observable'i geri almis olmayacagiz.
    // Fakat pipe kullandigimizdan dolayi bir observable geri almis olduk.

    return this.eventService.getEvents().pipe(map((events) => events));

    // Yukarida events=> events ile events i alip oldugu gibi geri donmesini sagladik
  }
}

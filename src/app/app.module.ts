import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent,
  EventsThumbnailComponent,
  CreateEventComponent

} from './events/index';
import {  } from './events/events-thumbnail.component';
import { Navbar } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-detail/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import {  } from './events/create-event.component';
import { EventRouteActivator } from './events/event-detail/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/events-list-resolve.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    Navbar,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('Bilgileriniz kaybolabilir. Sayfadan ayrılmak istediğinize emin misiniz?')
  return true;

}

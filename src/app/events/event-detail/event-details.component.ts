import { Component } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Component({
    templateUrl:'./event-details.component.html'
})
export class EventDetailsComponent {
    constructor(private eventService:EventService){}
event:any

    ngOnInit(){
        this.event = this.eventService.getEvent(1)
    }

}
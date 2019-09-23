import { Component } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./event-details.component.html'
})
export class EventDetailsComponent {
    constructor(private eventService:EventService, private route:ActivatedRoute){}
event:any

    ngOnInit(){
        this.event = this.eventService.getEvent(
            +this.route.snapshot.params['id']
        )
        console.log('Event',this.event)
    }

}
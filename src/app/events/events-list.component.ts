import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'event-list.component.html',
    styles:[`
        .card-border{border:1px solid grey;}
    `]

})
export class EventsListComponent implements OnInit{
  events:any;
  constructor(private eventService:EventService,private toastr:ToastrService,private route:ActivatedRoute){
  }
 
 
  ngOnInit(){
    this.events = this.route.snapshot.data['events']
    console.log(this.events)
  }
  handleToasterClick(eventId,eventName){
    this.toastr.warning(eventId,eventName)
    console.log('Toaster Service:',eventId,eventName)
  }
}
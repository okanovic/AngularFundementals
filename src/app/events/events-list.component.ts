import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div>
    <h1>Angular Upcoming Events</h1>
    <div class="card">
    <div class="row">
        <div class="col-md-6 card-border"  *ngFor = "let event of events">
        <events-thumbnail [routerLink]="['/events',event.id]" #thumbnail (click)="handleToasterClick(event.name)" [events]="event"></events-thumbnail>
        </div>
    </div>
    </div>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Me Foo</button>
    <h4>{{thumbnail?.someProperty}}</h4>

</div>
    `,
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
  }
  handleToasterClick(eventName){
    this.toastr.warning(eventName)
    console.log(eventName)
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'events-thumbnail',
    template: `
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: $/{{event.price}}</div>
        <div>
            <span>Location : {{event.location.adress}} - {{event.location.city}} - {{event.location.country}}</span>
        </div>
    `
    
})
export class EventsThumbnailComponent {
   @Input() event: any;
   someProperty:any = "Some Property"
   logFoo(){
       console.log('Console Foo')
   }
}
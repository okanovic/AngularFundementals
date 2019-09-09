import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Angular Upcoming Events</h1>
    <div class="card">

    <events-thumbnail #thumbnail [event]="event1"></events-thumbnail>
    </div>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Me Foo</button>
    <h4>{{thumbnail.someProperty}}</h4>

</div>
    `,

})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '25/05/2019',
        time: '19:00',
        price: 499.99,
        imgUrl: '/assets/images/logo-ayarlar.jpeg',
        location: {
            adress: 'Kartal',
            city: 'İstanbul',
            country: 'Türkiye'
        }
    }

 
}
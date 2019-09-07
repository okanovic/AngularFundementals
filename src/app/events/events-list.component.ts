import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
        <h1>Angular Upcoming Events</h1>
        <div class="card">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: $/{{event.price}}</div>
        <div>
            <span>Location : {{event.location.adress}} - {{event.location.city}} - {{event.location.country}}</span>
        </div>
        </div>
        </div>

    `,

})
export class EventListComponent {
    event = {
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
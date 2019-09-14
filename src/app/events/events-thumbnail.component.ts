import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'events-thumbnail',
    template: `
        <h2 [style.color]="events.name === 'Angular Connect' ? '#ecf0f1' : '#3498db'">{{events?.name}}</h2>
        <div>Date: {{events?.date}}</div>
        <div [ngClass]="{green: events?.time === '8:00 am', bold:events?.time === '8:00 am'}"
            [ngSwitch]="events?.time">Time: {{events?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: $/{{events?.price}}</div>
        <div *ngIf="events?.location">
            <span>Location : {{events?.location?.adress}} - {{events?.location?.city}} - {{events?.location?.country}}</span>
        </div>
        <div *ngIf="events.onlineURL">Online URL: {{events?.onlineURL}}</div>
    `,
    styles: [`
        h2 {color:blue}
        .green {color:green !important}
        .bold { font-weight:bolder !important }

    `]
})
export class EventsThumbnailComponent {
    @Input() events: any;
    someProperty: any = "Some Property"
    logFoo() {
        console.log(this.someProperty)
    }
}
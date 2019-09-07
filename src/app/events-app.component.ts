import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <div class="container">
  <h2>Okan TOPER</h2> 
  <h3>{{title}}</h3>
  
  <img src="./assets/images/logo-ayarlar.jpeg">
  </div>
  `,
})
export class EventsAppComponent {
  title = 'AngularProject-Training';
}

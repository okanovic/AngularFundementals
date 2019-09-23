import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [`
    div>ul>li>a.active{color:orange}
    `]
})
export class Navbar {

}
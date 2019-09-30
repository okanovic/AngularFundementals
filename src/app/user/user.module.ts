import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.conponent'; 
@NgModule({
    imports: [CommonModule, RouterModule.forChild(userRoutes)],
    exports: [],
    declarations: [ProfileComponent],
    providers: [],
})
export class UserModule { }
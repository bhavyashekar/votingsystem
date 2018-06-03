import { Component } from '@angular/core';
import { NotificationComponent } from '../shared/notification/notification.component';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
        //let notification = new NotificationComponent();
        //notification.alertType = "danger";
        //notification.message = "some message"; 
    }
}

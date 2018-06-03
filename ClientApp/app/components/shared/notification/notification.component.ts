import { Component, OnInit, Inject, Input, ChangeDetectorRef } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Notification, NotificationService } from '../../../services/notification.service';

@Component({
    selector: 'notification',   
    template: `
               <div class="row notification-alert" *ngIf = "notification.alertType != null">
                    <div class="col-sm-11 alert alert-{{notification.alertType}} alert-dismissable" >  
                    <a href="#" class="close notification-alert-close" data-dismiss="alert" aria-label="close" (click)="onCloseClick()"><strong>&times;</strong></a>
                    <strong>{{notification.message}}</strong>                     
                    </div>
                </div>
              `
})

/** header component*/
export class NotificationComponent {
    
    @Input() notification: Notification;
    
    constructor(private notificationService: NotificationService, private ref: ChangeDetectorRef) {
        this.notification = new Notification();
        
        
    }

    onCloseClick() {
        this.notification = new Notification();
    }
    /** Called fter HeaderComponent component initialized */
    ngOnInit(): void {

        this.notificationService.getNotification().subscribe(d => {
            this.notification = d
            this.ref.detectChanges();
        }
        );


    }

}


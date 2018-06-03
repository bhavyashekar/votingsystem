import { ErrorHandler, Injectable, NgModule } from '@angular/core';
import { NotificationService } from './services/notification.service';
@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private notificationService: NotificationService) { }
    handleError(error) {
        //isError = true;
        console.log(error);   
        
        //TODO:  implement error logging.
        var notification = { alertType: "danger", message: error };        
        this.notificationService.setNotification(notification);    
        //throw error;
    }

}
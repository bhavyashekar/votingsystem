import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NotificationService {
    
    private notification = new Subject<Notification>();

    setNotification(notif: Notification) {
        this.notification.next(notif);
    }

    getNotification(): Observable<any> {
        return this.notification.asObservable();
    }
}

export class Notification {

    alertType: string;
    message: string;    
}

  

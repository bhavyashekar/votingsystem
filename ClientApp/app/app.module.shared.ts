import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './components/app/app.component';
import { AppErrorHandler } from './app.errorhandler';

// page components

//shared components
import { HeaderComponent } from "./components/shared/header/header.component";
import { NavMenuComponent } from './components/shared/navmenu/navmenu.component';
import { BreadcrumbComponent } from "./components/shared/breadcrumb/breadcrumb.component";
import { NotificationComponent } from './components/shared/notification/notification.component';

//shared services
import { CommonService } from "./services/common.service";
import { NotificationService } from './services/notification.service';
import { ValidateVoterComponent } from './components/pages/validatevoter/validatevoter.component';
import { VoteComponent } from './components/pages/vote/vote.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        HeaderComponent,
        
        BreadcrumbComponent,
       
        NotificationComponent,
   
        ValidateVoterComponent,
        VoteComponent
    ],
    providers: [CommonService, NotificationService,
        {
            provide: ErrorHandler,
            useClass: AppErrorHandler
        }
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
       // Ng2AutoCompleteModule,
        RouterModule.forRoot([
            
            { path: '', redirectTo: 'validate', pathMatch: 'full' },
            { path: 'Home', component: HomeComponent },                
            { path: 'validate', component: ValidateVoterComponent },
            { path: 'vote/:id', component: VoteComponent },
            { path: '**', redirectTo: 'validate' }

      
        ])
    ]
})
export class AppModuleShared {
}
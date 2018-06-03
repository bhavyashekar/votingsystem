import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
//import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    //declarations: [HeaderComponent],
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared        
    ]
})
export class AppModule {
    
}

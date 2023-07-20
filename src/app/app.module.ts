import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';

// //Rutas
 import { routing, appRoutingProviders} from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    routing,     
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }

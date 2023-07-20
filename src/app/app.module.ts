import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';

// //Rutas
 import { routing, appRoutingProviders} from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent    
  ],
  imports: [
    BrowserModule,   
    HttpClientModule,
    //AppRoutingModule
    routing,     
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }

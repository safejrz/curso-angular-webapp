import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';

// //Rutas
 import { routing, appRoutingProviders} from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { AddProductsComponent } from './components/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,    
    AddProductsComponent
  ],
  imports: [
    BrowserModule,   
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,   
    //AppRoutingModule
    routing,     
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }

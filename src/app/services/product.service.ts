import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';

import { GLOBAL } from './global';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

// Model
import { NewProduct, Product } from '../models/product';

@Injectable()
export class ProductService{
  public url:string

    constructor(public _http:HttpClient) {    
        this.url = GLOBAL.url;
        //this.products = this.getProducts();
    }

    //getProducts(){
    getProducts():Observable<Product[]>{
        //return this._http.request('GET', this.url, {responseType:'json'});
        var result = this._http.get<Product[]>(this.url);
        return result;
    }

    // //From heroes
    // addProduct(product:Product): Observable<Product> {
    //          return this._http.post<Product>(this.url,product, this.httpOptions)
    //         //  .pipe( 
    //         //   tap(newProduct => console.log(`added hero w/ id=${(newProduct)}`)),
    //         //   // catchError(this.handleError<Product>('addProduct'))
    //         // );             
    //   }  

    //From Course
    addProduct(newProduct : NewProduct){
      let json = JSON.stringify(newProduct);      
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      
      return this._http.post(this.url, json, httpOptions)
                      .subscribe(result => {
                          console.log(result);                        
                        }
                      );
    }

    makeFileRequest(url:string, params: Array<string>, files: Array<File> ){
      return new Promise((resolve, reject)=>{
          var formData: any= new FormData();
          var xhr = new XMLHttpRequest();

          for(var i = 0; i < files.length; i++)
          {
            formData.append('uploads[]', files[i], files[i].name);            
          }

          xhr.onreadystatechange = function() {
            if(xhr.readyState == 4){
              if(xhr.status ==200){
                resolve(JSON.parse(xhr.response));
              }
              else{
                reject(xhr.response);
              }
            }
          };

          xhr.open("POST", url, true);
          xhr.send(formData);
      });
    }
}    
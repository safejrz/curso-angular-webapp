import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Product } from '../models/product';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable()
export class ProductService{
public url:string;

constructor(public _http:HttpClient
) {    
    this.url = GLOBAL.url;    
}

getProducts(){
    //return "SERVICE TEXT GOES HERE";
    return this._http.request('GET', this.url, {responseType:'json'});        
}
}
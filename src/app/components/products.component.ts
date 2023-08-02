import {Component} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product';

@Component({
    selector: 'productos',
    templateUrl: '../views/products.component.html',
    providers: [ProductService]
})
export class ProductsComponent{
    public titulo:string;
    public products:Product[] = [];
    public dato_externo = "Victor Robles";
    public identity = {
        id:1,
        web:'yolomcswagger.com',
        tematica:'qti'
    };

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService
    ) {    
        this.titulo = 'Listado de productos';
    }

    ngOnInit(){
        console.log('se ha cargado el componente Products');
        this._productService.getProducts().subscribe(
            result => {                
                this.products = <Product[]>result; //result.data;                
                     console.log(this.products);
            },
            error => {
                console.log(<any>error);
            }             
        )
    }
}
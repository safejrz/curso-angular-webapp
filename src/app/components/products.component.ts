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
                //console.log(result);
                this.products = <Product[]>result; //result.data;

                // if(result.code != 200)
                // {
                     console.log(result);
                     console.log(this.products);
                // }
                // else
                // {
                //     this.products = result.data;
                // }
            },
            error => {
                console.log(<any>error);
            }
             //this.property = arg);
        )
        //alert(this._productService.getProducts());        
    }
}
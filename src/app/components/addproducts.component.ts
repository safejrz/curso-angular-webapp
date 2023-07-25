import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product, NewProduct } from '../models/product';

@Component({
    selector: 'addproducts',
    templateUrl: '../views/addproducts.component.html',
    providers: [ProductService]
})
export class AddProductsComponent{
    public titulo:string;
    public product:Product;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService:ProductService        
    ) {
        this.titulo = 'Crear un nuevo producto';
        this.product = new Product(0, '', '', '', '');
    }

    ngOnInit(){
        console.log('se ha cargado el componente AddProducts');        
    }

    onSubmit(){
        console.log(this.product);
        console.log('converting to new Product');
        let newProduct:NewProduct = new NewProduct(
            this.product.name,
            this.product.description,
            this.product.price,
            this.product.image)
        console.log(newProduct)
        this._productService.addProduct(newProduct)
    }
}
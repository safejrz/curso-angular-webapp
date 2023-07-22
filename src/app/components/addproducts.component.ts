import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    selector: 'addproductos',
    templateUrl: '../views/addproducts.component.html',
    providers: [ProductService]
})
export class AddProductsComponent{
    public titulo:string;
    public product:Product;

    constructor() {
        this.titulo = 'Crear un nuevo producto';
        this.product = new Product(0, '', '', '', '');
    }

    ngOnInit(){
        console.log('se ha cargado el componente AddProducts');        
    }

    onSubmit(){
        console.log(this.product);
    }
}
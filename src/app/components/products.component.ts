import {Component} from '@angular/core';

@Component({
    selector: 'productos',
    templateUrl: '../views/products.component.html'
})
export class ProductsComponent{
    public titulo:string;
    /**
     *
     */
    constructor() {
this.titulo = 'Listado de productos';
    }

    ngOnInit(){
        console.log('se ha cargado el componente Products');
    }
}
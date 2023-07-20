import {Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.component.html'
})
export class HomeComponent{
    public titulo:string;
    /**
     *
     */
    constructor() {
this.titulo = 'Web app de productos';
    }

    ngOnInit(){
        console.log('se ha cargado el componente home');
    }
}
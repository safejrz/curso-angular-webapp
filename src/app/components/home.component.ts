import {Component, Input, Output} from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'home',
    templateUrl: '../views/home.component.html'
})
export class HomeComponent{
    public title:string;

@Input() property1:string;
//@Input("hyamom") property2:string;
@Input() property2:string;

    constructor() {
this.title = 'Web app de productos';
this.property1 = 'YOLO'
this.property2 = 'McSWAGGER'
    }

    ngOnInit(){
        console.log('se ha cargado el componente home');
    }

    public toggleTitle(){
        $('.title').slideToggle();
    }
}
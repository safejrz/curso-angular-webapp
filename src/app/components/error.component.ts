import {Component} from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: '../views/error.component.html'
})
export class ErrorComponent{
    public titulo:string;
    
    constructor() {
this.titulo = 'PAGINA DE ERROR';
    }

    ngOnInit(){
        console.log('se ha cargado el componente error');
    }
}
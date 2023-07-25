export class Product {
    constructor (
        public id:number,
        public name:string,                        
        public description:string,
        public price:string,
        public image:string,
    ){}
}

export class NewProduct {
    constructor (
        public name:string,                        
        public description:string,
        public price:string,
        public image:string,
    ){}
}
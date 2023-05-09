const productarr =[];
module.exports=class Product {
    constructor(t){
            this.title=t;
    }

    save(){
        productarr.push(this);
    }

    static fetchAll(){
        return productarr;
    }
}
const productarr =[];
const fs=require('fs');
const path=require('path')
const rootdir=require('../util/path');
const filepath=path.join(rootdir,'data','products.json');

const getproduct=(cb)=>{
    fs.readFile(filepath,(err,contentfile)=>{
        if(err){
            cb([]);
        }else{

            cb(JSON.parse(contentfile))
        }
    });
}
module.exports=class Product {
    constructor(t){
            this.title=t;
    }

    save(){

        getproduct(productarr=>{
            productarr.push(this);
            fs.writeFile(filepath,JSON.stringify(productarr),(err)=>{
                console.log(err);
            })
        })
       
            
        

    }

    static fetchAll(cb){
        getproduct(cb)

    }
}
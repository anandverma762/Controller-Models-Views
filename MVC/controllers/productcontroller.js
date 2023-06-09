const Product = require('../models/productmodels');

exports.getproductadd= (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }


exports.getproduct=(req, res, next) => {
  const pro=new Product(req.body.title);
  pro.save();
    res.redirect('/');
  }


exports.shopproduct=(req, res, next) => {
  Product.fetchAll((products)=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });

}

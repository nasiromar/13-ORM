// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category,{
    foreignKey: 'category_id',
});


Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});


Product.belongToMany(Tag, {
    through: {
        model: ProductTag
    },
    as: 'Product'
});

Tag.belongToMany(Product, {
    through: {
        model: ProductTag
    },
    as: 'Tag'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};





























































































































































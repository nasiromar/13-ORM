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
    as: 'product'
});

Tag.belongToMany(Product, {
    through: {
        model: ProductTag
    },
    as: 'tag'
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};





























































































































































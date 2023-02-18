const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model{}

ProductTag.init(
    {
        //explain colums
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Product_tag',
    }
);

module.exports = ProductTag
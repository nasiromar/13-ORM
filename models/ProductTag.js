const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model{}

ProductTag.init(
    {
        //explain colums
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.STRING,
            references: {
                model: 'product',
                key: 'id',    
            }
         },
         tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id', 
            }
         }
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
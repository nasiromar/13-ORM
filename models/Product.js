// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
//import our database connection from config
const sequelize = require('../config/connection');

// Initialize Produst model (table) by extending off sequelizes model class
class Product extends Model {}

// set up fields and rules for product model
Product.init(
    {
        //explains colums
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultVault: 10,
            isNumeric: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            isFloat: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model:'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Product',
    }
);

module.exports = Product;

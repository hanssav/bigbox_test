'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        transactions.belongsTo(models.customers, {
            as: "customer",
            foreignKey: {
                name: "customer_id"
            }
        })
        
        transactions.belongsTo(models.products, {
            as: "product", 
            foreignKey: {
                name: "product_id"
            }
        })
    }
  }
  transactions.init({
    customer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};
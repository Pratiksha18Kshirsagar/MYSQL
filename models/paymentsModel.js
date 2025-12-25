const { DataTypes, Model } = require('sequelize');
const sequelize = require("../utils/database");


const Payment = sequelize.define('Payment',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amountPaid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paymentStatus: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
     {
    tableName: 'payments',
    timestamps: false
  }
);

module.exports = Payment;
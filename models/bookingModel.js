const { DataTypes, Model } = require('sequelize');
const sequelize = require("../utils/database");


const Booking = sequelize.define('Booking',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        seatNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
);

module.exports = Booking;
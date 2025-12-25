// const db = require('../utils/database');
const busModel = require("../models/busModel");

const getAllBuses = async(req, res) => {

try {
    const buses = await busModel.findAll();
    if (buses.length == 0) {
      return res.status(400).json({ message: "No user found!" })
    }
    res.status(200).json(buses);
} catch (error) {
    res.status(500).json({error:"Failed to get !",error});
}
    // db.query('SELECT * FROM buses', (err, results) => {
    //     if (err) {
    //         return res.status(500).json({ error: err.message });
    //     }
    //     res.json(results);
    // }
    // );
};

const getAvailableBuses = async(req, res) => {

    try {
        const seats = req.params.seats;
         const buses = await busModel.findAll();
         buses = buses.filter((bus)=>{bus.availableSeats > seats});
         res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
    // const seats = req.params.seats;
    // db.query(
    //     'SELECT * FROM buses WHERE availableSeats >= ?',
    //     [seats],
    //     (err, results) => { 
    //         if (err) {
    //             return res.status(500).json({ error: err.message });
    //         }
    //         res.json(results);
    //     }
    // );
}


const addNewBus = async(req, res) => {
try {
    const { busNumber, totalSeats , availableSeats } = req.body;
    const bus = await busModel.create({busNumber , totalSeats , availableSeats});
    res.status(200).json({message:"Bus added successfully" , bus});
} catch (error) {
    res.status(500).json({ error: err.message });
}


    // const { busNumber, totalSeats , availableSeats } = req.body;
    // db.query(
    //     'INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)',
    //     [busNumber,  totalSeats , availableSeats],
    //     (err, results) => {
    //         if (err) {
    //             return res.status(500).json({ error: err.message });
    //         }
    //         res.status(201).json({ message: 'Bus added successfully', busId: results.insertId });
    //     }
    // );
};

module.exports = {
    getAllBuses,
    addNewBus ,
    getAvailableBuses
};

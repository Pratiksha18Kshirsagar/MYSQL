const db = require('../utils/database');

const getAllBuses = (req, res) => {
    db.query('SELECT * FROM buses', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    }
    );
};

const getAvailableBuses = (req, res) => {
    const seats = req.params.seats;
    db.query(
        'SELECT * FROM buses WHERE availableSeats >= ?',
        [seats],
        (err, results) => { 
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        }
    );
}


const addNewBus = (req, res) => {
    const { busNumber, totalSeats , availableSeats } = req.body;
    db.query(
        'INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)',
        [busNumber,  totalSeats , availableSeats],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Bus added successfully', busId: results.insertId });
        }
    );
};

module.exports = {
    getAllBuses,
    addNewBus ,
    getAvailableBuses
};

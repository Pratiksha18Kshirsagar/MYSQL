const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pratiksha@18',
  database: 'bookingsystem_db'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
    return;
  }
  console.log('MySQL connected');
});

app.get('/', (req, res) => {
  res.send('Express + MySQL Server Running');
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
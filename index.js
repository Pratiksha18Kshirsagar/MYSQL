const express = require('express');
const db = require('./utils/database');
const app = express();
const busRoutes = require('./routes/busRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/buses', busRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Express + MySQL Server Running');
});



app.listen(4000, () => {
  console.log('Server running on port 4000');
});
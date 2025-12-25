// const mysql = require('mysql2');
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('bookingsystem_db', 'root', 'Pratiksha@18', {
  host: 'localhost',
  dialect: 'mysql'
});


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Pratiksha@18',
//   database: 'bookingsystem_db'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('MySQL connection failed:', err.message);
//     return;
//   }
//   console.log('MySQL connected');
// });


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// module.exports = db;
module.exports = sequelize;
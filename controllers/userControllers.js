const userModel = require("../models/userModel")

const fetchUsers = async (req, res) => {
  try {
    const users = await userModel.findAll();
    if (users.length == 0) {
      return res.status(400).json({ message: "No user found!" })
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "failed to get all users!" });
  }
  // db.query('SELECT * FROM users', (err, results) => {
  //   if (err) {  
  //       return res.status(500).json({ error: err.message });
  //   }
  //   res.json(results);
  // });
}

const createUser = async(req, res) => {

try {
  const {name,email} = req.body;
  const user = await userModel.create({name,email});
  res.status(200).json({message:"Added user successfully" , user})
} catch (error) {
      res.status(500).json({ error: "failed to create!" });
}
  // const { name, email } = req.body;
  // db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
  //   if (err) {
  //     return res.status(500).json({ error: err.message });
  //   }
  //   res.status(201).json({ id: results.insertId, name, email });
  // }
  // );
}

module.exports = {
  fetchUsers,
  createUser
};
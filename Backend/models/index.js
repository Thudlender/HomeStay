const sequilize = require("./db");
const Sequilize = require("sequelize");
const Homestay = require("./homestay.model");


const db = {};
db.Sequilize = Sequilize;
db.sequilize = sequilize;
db.Homestay = Homestay;

module.exports = db;
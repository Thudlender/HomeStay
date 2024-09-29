const {DataTypes} = require("sequelize")
const sequelize = require("./db");

const Homestay = sequelize.define("homestay", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Financial.sync({force:false})
.then(() => {
    console.log("Table created or already exists");
})
.catch((error) => {
    console.log("Error creating Financial Table", error);
});

module.exports = Homestay;
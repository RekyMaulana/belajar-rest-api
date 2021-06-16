import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize;

const User = db.define('user', {
    // Define attributes
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
  },{
    // Freeze Table Name
    freezeTableName: true
  });

export default User
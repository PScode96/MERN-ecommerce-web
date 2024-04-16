const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("DB_URI", {
      // You can include options for the database connection here if needed
    });
    console.log(`Mongodb connected with server: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = connectDatabase;

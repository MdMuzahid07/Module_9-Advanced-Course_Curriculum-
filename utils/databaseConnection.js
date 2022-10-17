const mongoose = require("mongoose");

// database connection using mongoose
const databaseConnection = () => {
    return mongoose.connect(process.env.LOCAL_DATABASE).then(() => {
        console.log(`database connected using mongoose`);
    });
}

module.exports = databaseConnection;
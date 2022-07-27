const express = require("express");
const connectDB = require("./database/connect");
const cors = require('cors')({});

const app = express();

//connect to database
try {
  connectDB;
} catch(err) {
  console.log("hello"); 
}

// Routes file
const routes = require('./routes/routes');

app.use(cors);
app.use(express.json());

app.use('/api', routes);


app.listen(5000, () => console.log("server running"));

// Handle unhandled promise rejection
process.on('uncaughtException', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  //app.close(() => process.exit(1));
});


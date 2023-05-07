const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();


// parse request to body-parser 
app.use(bodyParser.urlencoded({extended:true}))

// to can reach any image in uplaod folder
app.use("/uploads",express.static('uploads'))

app.use(express.json());
// load routers
app.use('/api',require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})
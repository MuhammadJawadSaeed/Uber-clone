const cors =  require ('cors');
const express =  require ('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

app.use(cors());
connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
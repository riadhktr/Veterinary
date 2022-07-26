const express = require('express');
const connectDb = require('./config/ConnectDb');
const app = express();
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const AccountRouter = require('./routes/accountUser');
const blogRoutes = require('./routes/blogRoutes');
const petRoutes = require('./routes/petRoutes');
const AppoinementRoutes = require('./routes/ApoinementsRoute');
const AnnonceRoutes = require('./routes/AnnonceRoutes');
require('dotenv').config();
const port = process.env.PORT ;

connectDb() ;

app.use( '/public',express.static('public'));

app.use(cors({credentials: true ,origin:"http://localhost:3000"}))

app.use(express.json({extended: false}))

app.use('/api/auth',authRoutes);
app.use('/account/user',AccountRouter);
app.use ('/api/blogs', blogRoutes);
app.use ('/api/pets', petRoutes);
app.use ('/api/annonce', AnnonceRoutes);
app.use ('/api/appoinement', AppoinementRoutes);


app.listen(port , (err)=>{
    (err)? console.log(err) : console.log(`server starting at port :${port}`)
})
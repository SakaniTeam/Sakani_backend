const express = require('express');
const app = express();
app.use(express.json());
const propertyRouter = require('./routes/property.Routes') 
const offerRouter = require('./routes/offer.Routes') 
const mongoose = require('./database/db');
//const { validationResult } = require('express-validator');
//const PropertyController = require('./controller/property.controller') ;
const userRouter = require('./routes/user.routes');
const tourRequestRouter = require('./routes/tourRequest.Routes');
const favouritRouter = require('./routes/favourite.routes')

app.use('/api/Users', userRouter);
app.use('/api/properties', propertyRouter) ;    
app.use('/api/offers', offerRouter);
app.use('/api/favourites', favouritRouter) ;
app.use('/api/tours', tourRequestRouter);




app.listen(4000,'192.168.1.3', () => {
    console.log('listening on port 4000');
})


const mongoose = require('mongoose');
const propertySchema = mongoose.Schema({
    /// kind  == rsedential and commercial
    kind: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    propertyaddress: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    PhoneNmber: {
        type: Number,
        required: true
    },
    moreDetails: {
        type: String,
        required: true
    },
    rentDuration: {
        type: String,
        required: true
    }
    // ,
    // photoUplouded: {
    //     data: Buffer,  // Buuffer : Store the image as binary data
    //     contentType: String, // Store the content type (e.g., image/jpeg, image/png)
    // },
    // location: {
    //     longitude: {
    //         type: Number,
    //         required: true
    //     },
    //     latitude: {
    //         type: Number,
    //         required: true
    //     }
   //}
})

const Resdential = mongoose.model('Resdential', propertySchema);
const Commercial = mongoose.model('Commercial', propertySchema);
const Property = mongoose.model('Property', propertySchema);
module.exports = {
    Resdential ,
     Commercial ,
     Property
};


const express = require('express');

const router = express.Router();

const property = require('../models/properties');


const PropertyController = require('../controller/property.controller');




router.route('/Res')
    .post(PropertyController.addResdential)
    .get(PropertyController.getResdential);

router.route('/Comm')
    .post(PropertyController.addCommercial)
    .get(PropertyController.getCommercial)


router.route('/')
    .get(PropertyController.getallproperty);


router.route('/:propertyId')
    .delete(PropertyController.deleteProperty)
    .patch(PropertyController.updateproperty)
    .get(PropertyController.getSingleProperty);



module.exports = router;
const { validationResult } = require("express-validator");

const { Resdential, Commercial , Property } = require('../models/properties');
  

// // add property for commercial,resdential properties
// const addProperty = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json(errors.array());
//     }
//     const newProperty = new Property(req.body);

//     try {
//         await newProperty.save();
//         res.status(201).json(newProperty);
//     } catch (err) {
//         res.status(404).json({ msg: err });
//            }

// }
const addResdential = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    const newResdential = new Resdential(req.body);
    const newProperty = new Property(req.body);

    try {
        await newProperty.save();
        await newResdential.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(404).json({ msg: err });
           }

}

const addCommercial = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    const newCommercial = new Commercial(req.body);
    const newProperty = new Property(req.body);

    try {
        await newProperty.save();
        await newCommercial.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(404).json({ msg: err });
           }

}

const getallproperty = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}
const getResdential = async (req, res) => {
    try {
        const properties = await Resdential.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}
const getCommercial = async (req, res) => {
    try {
        const properties = await Commercial.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}
const getSingleProperty = async (req, res) => {
    try {
        const id = req.params.propertyId;
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: "property not found" });
        }
        res.json(property);
    } catch (error) {
        return res.status(400).json({ message: "Error" });

    }

}
const updateproperty = async (req, res) => {
    const propertyID = req.params.propertyId;
    try {

        const PropertyUpdated = await Property.updateOne({ _id: propertyID }, { $set: { ...req.body } });
        res.status(200).json(PropertyUpdated);
    } catch (err) {
        return res.status(400).json({ success: false, msg: err.msg })
    }

}

const deleteProperty = async (req, res) => {
    const id = req.params.propertyId;
    try {
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
            return res.status(404).json({ message: "Property not found!" });
        }
        res.json(deletedProperty);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}


module.exports = {
    addCommercial,
    addResdential,
    getallproperty,
    getSingleProperty,
    getResdential ,
    getCommercial,
    updateproperty,
    deleteProperty
}
const { validationResult } = require('express-validator');
let Tour = require('../models/tourrequest.model');

// const { validationResult } = require('express-validator');

const addTour = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newTour = new Tour(req.body);
    await newTour.save();

    res.status(201).json(newTour);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const updateTour = async (req, res) => {
  try {
    const tourId = req.params.reqId;

    const updateTour = await Tour.findByIdAndUpdate(tourId, { $set: { ...req.body } });
    if (!updateTour) {
      return res.status(400).json({ massage: "tour not found" });
    }

    res.status(200).json(updateTour);
  } catch (error) {
    console.error("Error updating tour:", error.message);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);

  } catch (e) {
    return res.status(400).json({ "errrrrrrrrrrrrrrrrrrrrrrrr": e });
  }

};
const deleteTour = async (req, res) => {
  try {
    const tourId = req.params.reqId;

    let single_tour_req = await Tour.findByIdAndDelete(tourId)
    if (!single_tour_req) {
      return res.status(404).json({ msg: "tour request not found" })
    }
    res.json({ Message: "tour request deleted successfully" });
  } catch (error) {
    return res.status(400).json(error);
  }
};
const getSingleTour = async (req, res) => {
  try {
    const id = req.params.reqId;
    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ message: "tour request not found" });
    }
    res.json(tour);
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
}

module.exports = {
  addTour,
  updateTour,
  getAllTours,
  deleteTour,
  getSingleTour
}
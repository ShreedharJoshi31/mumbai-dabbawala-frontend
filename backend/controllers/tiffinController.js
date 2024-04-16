import Tiffin from "../models/tiffinModel.js";

export const getAllTiffins = async (req, res) => {
  try {
    const tiffins = await Tiffin.find();
    res.json(tiffins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTiffin = async (req, res) => {
  try {
    const newTiffin = req.body;
    const tiffin = new Tiffin(newTiffin);
    await tiffin.save();
    res.status(201).json(tiffin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

import mongoose from "mongoose";
import express from 'express';

import OptionController from "../Controllers/option.controller.js";

export const optionRouter = express.Router();
const optionController = new OptionController();

optionRouter.delete('/:id/delete', (req, res) => {
    optionController.deleteOption(req, res)
});

optionRouter.post('/:id/add_vote', (req, res) => {
    optionController.addVote(req, res)
});




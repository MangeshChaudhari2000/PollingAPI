import mongoose from "mongoose";
import express from 'express';

import QuestionController from "../Controllers/question.controller.js";

export const questionRouter = express.Router();
const questionController = new QuestionController();

questionRouter.post('/create', (req, res) => {
    questionController.createQuestion(req, res)
});

questionRouter.post('/:id/options/create', (req, res) => {
    questionController.addOption(req, res)
});

questionRouter.delete('/:id/delete', (req, res) => {
    questionController.deleteQuestion(req, res)
});

questionRouter.get('/:id', (req, res) => {
    questionController.viewQuestion(req, res)
});


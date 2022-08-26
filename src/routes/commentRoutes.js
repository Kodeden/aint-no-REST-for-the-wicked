import express from 'express';
import { CommentsController } from '../controllers/commentsController.js';

export const commentRouter = express.Router();

const commentsController = new CommentsController();

commentRouter.get("/comments", (req, res) => commentsController.getComments(req, res));

commentRouter.post("/comment", (req, res) => commentsController.createComment(req, res));

commentRouter.get("/comment/:id", (req, res) => commentsController.getComment(req, res));

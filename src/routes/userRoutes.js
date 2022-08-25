import express from 'express';
import { UsersController } from '../controllers/usersController.js';
export const userRouter = express.Router();

const usersController = new UsersController();

userRouter.get("/users", (req, res) => usersController.getUsers(req, res));

userRouter.post("/user", (req, res) => usersController.createUser(req, res));

userRouter.put("/user/:id", (req, res) => usersController.updateUser(req, res));

userRouter.delete("/user/:id", (req, res) => usersController.deleteUser(req, res));
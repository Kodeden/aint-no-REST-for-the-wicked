import { UsersService } from "../services/usersService.js";

export class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async getUsers(req, res) {
    try {
      const users = await this.usersService.getUsers();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("ERROR!!!!");
    }
  }

  async createUser(req, res) {
    try {
      const content = req.body;
      await this.usersService.createUser(content);
      res.status(200).send("User Created");
    } catch (error) {
      console.log(error);
      res.status(500).send("ERROR!!!!");
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const content = req.body;
      await this.usersService.updateUser(id, content);
      res.status(200).send("User Updated");
    } catch (error) {
      console.log(error);
      res.status(500).send("ERROR!!!!");
    }
  }
  
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await this.usersService.deleteUser(id);
      res.status(200).send("User Deleted");
    } catch (error) {
      console.log(error);
      res.status(500).send("ERROR!!!!");
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await this.usersService.getUser(id);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("ERROR!!!!");
    }
  }
}
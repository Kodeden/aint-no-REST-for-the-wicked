import { User } from "../models/user.js";
import { UsersRepo } from "../repos/usersRepo.js";

export class UsersService {
  constructor() {
    this.usersRepo = new UsersRepo();
  }

  async getUsers() {
    const result = await this.usersRepo.getUsers();
    return result.rows;
  }

  async createUser(reqBody) {
    const user = new User(reqBody.username, reqBody.password, reqBody.hairColor);
    await this.usersRepo.createUser(user);
  }

  async updateUser(id, reqBody) {
    await this.usersRepo.updateUser(id, reqBody);
  }

  async deleteUser(userId) {
    await this.usersRepo.deleteUser(userId);
  }
}
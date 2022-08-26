import { User } from "../models/user.js";
import { UsersRepo } from "../repos/usersRepo.js";

export class UsersService {
  constructor() {
    this.usersRepo = new UsersRepo();
  }

  async getUsers() {
    return (await this.usersRepo.getUsers()).rows;
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

  async getUser(userId) {
    const userRows = (await this.usersRepo.getUser(userId)).rows;
    const user = {};
    userRows.forEach(row => {
      if (!user.author) {
        user.author = row.author;
        user.comments = [row.comment]
      } else {
        user.comments.push(row.comment);
      }
    })
    return user;
  }

  // REDUCE APPROACH
  // async getUser(userId) {
  //   const userRows = (await this.usersRepo.getUser(userId)).rows;
  //   const squashedUserRows = userRows.reduce((prev, curr) => {
  //     prev.comments = [...prev.comments, curr.comment_text];
  //     return prev;
  //   }, {
  //     author: userRows[0].username,
  //     comments: []
  //   });
  //   return squashedUserRows;
  // }
}
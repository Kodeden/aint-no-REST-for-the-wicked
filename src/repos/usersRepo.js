import { pool } from '../utils/pool.js';

export class UsersRepo {
  constructor() {}

  getUsers() {
    return pool.query("SELECT * FROM users");
  }

  createUser({ username, password, hairColor }) {
    return pool.query(
      "INSERT INTO users (username, password, hair_color) VALUES ($1, $2, $3)",
      [username, password, hairColor]);
  }

  updateUser(id, content) {
    return pool.query(
      "UPDATE users set username = $1, hair_color = $2 WHERE id = $3",
      [content.username, content.hairColor, id]
    );
  }

  deleteUser(id) {
    return pool.query("DELETE FROM users WHERE id = $1", [id]);
  }
}
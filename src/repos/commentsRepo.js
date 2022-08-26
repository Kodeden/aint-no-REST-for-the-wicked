import { pool } from "../utils/pool.js";

export class CommentsRepository {
  constructor() {}

  getComments() {
    return pool.query("SELECT * FROM comments");
  }

  createComment({ commentText, userId }) {
    return pool.query(
      "INSERT INTO comments (comment_text, user_id) VALUES ($1, $2)", [commentText, userId]
    );
  }

  getComment(commentId) {
    return pool.query(
      `
        SELECT users.username as author, comments.comment_text as comment FROM comments
        JOIN users ON comments.user_id = users.id
        WHERE comments.id = $1
      `,
      [commentId]
    );
  }
}
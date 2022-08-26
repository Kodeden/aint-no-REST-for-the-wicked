import { Comment } from "../models/comment.js";
import { CommentsRepository } from "../repos/commentsRepo.js";

export class CommentsService {
  constructor() {
    this.commentsRepo = new CommentsRepository();
  }

  async getComments() {
    const result = await this.commentsRepo.getComments();
    return result.rows;
  }

  async createComment(reqBody) {
    const comment = new Comment (reqBody.commentText, reqBody.userId);
    await this.commentsRepo.createComment(comment);
  }

  async getComment(commentId) {
    const result = await this.commentsRepo.getComment(commentId);
    return result.rows[0];
  }
}
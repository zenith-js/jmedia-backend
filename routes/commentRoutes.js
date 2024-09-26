const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

// Routes for comments
router.get("/:articleId/comments", commentController.getCommentsByArticle);
router.post("/:articleId/comments", commentController.createComment);

module.exports = router;

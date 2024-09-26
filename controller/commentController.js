const Comment = require('../models/comment');

// Get all comments for an article
exports.getCommentsByArticle = async (req, res) => {
    try {
        const comments = await Comment.find({ article: req.params.articleId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a comment on an article
exports.createComment = async (req, res) => {
    const comment = new Comment({
        content: req.body.content,
        article: req.params.articleId,
        author: req.user.id
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

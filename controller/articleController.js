
const Article = require('../models/article');

// Get all articles in a community
exports.getArticlesByCommunity = async (req, res) => {
    try {
        const articles = await Article.find({ community: req.params.communityId });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create an article in a community
exports.createArticle = async (req, res) => {
    const article = new Article({
        title: req.body.title,
        content: req.body.content,
        community: req.params.communityId,
        author: req.user.id
    });

    try {
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

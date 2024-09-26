const Community = require('../models/community');

// Get all communities
exports.getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new community
exports.createCommunity = async (req, res) => {
    const community = new Community({
        name: req.body.name,
        description: req.body.description,
        author: req.user.id // Assuming JWT Auth with req.user
    });

    try {
        const newCommunity = await community.save();
        res.status(201).json(newCommunity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

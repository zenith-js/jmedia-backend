const express = require("express");
const router = express.Router();
const communityController = require("../controller/communityController");

// Routes for communities
router.get("/", communityController.getAllCommunities);
router.post("/", communityController.createCommunity);

module.exports = router;

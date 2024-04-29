const express = require("express");
const {getPost, createPost} = require("../controllers/post");
const validator = require("../Validators")

const router = express.Router();

router.get("/", getPost);
router.post("/post", validator.creatPostValidator, createPost);

module.exports = router;
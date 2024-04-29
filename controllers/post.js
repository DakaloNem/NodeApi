const { Result } = require("express-validator");
const Post = require("../models/model");

exports.getPost = (req, res) => {
   const posts = Post.find()
   .select("_id title body")
   .then((posts) => {
    res .json({
        posts: posts
    });
   })
   .catch(err => console.log("An error retreiving from Data"));
};

async function creatPostAsync(post) {
    try {
        await post.save();
        // create the reslt here

    }finally{
        console.log(`Post created: ${post}`);
    }
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    
    // you cannot access results from here
    creatPostAsync(post).then(result => {
        res.json({
            post: result
        });
    })
    //console.log("Creating Post: ", req.body);

};
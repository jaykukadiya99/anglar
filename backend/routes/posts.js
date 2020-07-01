const express = require('express');
const router = express.Router();
const post = require('../models/postModel');

router.post('/', async(req, res, next) => {
    // console.log(req.body);
    newPost = new post({
        title: req.body.title,
        content: req.body.content
    });

    await newPost.save();

    res.status(201).json({
        message: "post added",
        postId: newPost._id
    });
});

router.get('/', async(req, res, next) => {
    // posts = [{
    //         _id: "dbasjkb",
    //         title: "first",
    //         content: "first content"
    //     },
    //     {
    //         _id: "hnskcnsdgo ",
    //         title: "first",
    //         content: "first content"
    //     }
    // ];
    posts = await post.find({});
    res.status(200).json({ message: "Get posts done", posts: posts });
});

router.get('/:id', async(req, res, next) => {
    posts = await post.findById(req.params.id);
    res.status(200).json({ message: "Get one posts done", posts: posts });
});

router.put('/:id', async(req, res, next) => {
    const newPost = new post({
        _id: req.params.id,
        title: req.body.title,
        content: req.body.content
    });
    const result = await post.findByIdAndUpdate(req.params.id, newPost);
    res.status(200).json({ message: "update successful" });
});

router.delete('/:id', async(req, res, next) => {
    await post.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: "post deleted"
    })
});

module.exports = router;
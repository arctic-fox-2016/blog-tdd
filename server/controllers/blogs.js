var Blogs = require('../models/blogs')

module.exports = {
    insert: insert,
    display: display,
    update: update,
    deleteitem: deleteitem
}

function insert(req, res, next) {

    var blogs = new Blogs({
        article: req.body.article,
        contributor: req.body.contributor,
        comments: req.body.comments,
    })

    blogs.save((err) => {
        if (err)
            throw err
        res.json(blogs)
        console.log(blogs);
    })

}

function display(req, res) {
    Blogs.find({}, (err, results) => {
        res.json(results)
    })
}

function update(req, res) {

    //finding a current book
    Blogs.findOne({
        _id: req.params.id
    }, (err, items) => {
        //update the book
        blogs.article = req.body.article
        blogs.contributor = req.body.contributor
        blogs.comments = req.body.comments
        blogs.save((err) => {
            if (err)
                throw err;
            res.json(items)
        })
    })
}

function deleteitem(req, res) {
    Blogs.remove({
        _id: req.params.id
    }, (err, items) => {
        res.json({
            "messages": "File deleted"
        })
    })
}

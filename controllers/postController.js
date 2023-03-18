import PostModel from '../model/Post.model.js'


/** POST: http://localhost:8080/api/post/create 
 * @param : {
  "title" : "title",
  "description" : "description",
  "content": "media file link",
  "author" : "bill"
}
*/
export async function create(req, res) {

    try {
        const { title, description, content, author } = req.body;

        const post = new PostModel({
            author: author,
            title: title,
            description: description,
            content: content
        });

        // return save result as a response
        post.save()
            .then(result => res.status(201).send({ msg: "Post created Successfully", Post: post }))
            .catch(error => res.status(500).send({ error }))

    } catch (error) {
        return res.status(500).send(error);
    }

}

/** GET: http://localhost:8080/api/post/user123/ */
export async function getUserPosts(req, res) {

    const { userId } = req.params;

    try {

        if (!userId) return res.status(501).send({ error: "Invalid Username" });

        PostModel.find({ author: userId }, function (err, data) {
            if (err) return res.status(500).send({ err });
            if (!data) return res.status(501).send({ error: "Couldn't Find the User Posts" });

            return res.status(201).json(data);
        })

    } catch (error) {
        return res.status(404).send({ error: "Cannot Find Post Data" });
    }

}

/** GET: http://localhost:8080/api/post/user123/id */
export async function getUserPost(req, res) {

    const { userId, postId } = req.params;

    try {

        if (!userId) return res.status(501).send({ error: "Invalid Username" });

        PostModel.find({ author: userId, _id: postId }, function (err, post) {
            if (err) return res.status(500).send({ err });
            if (!post) return res.status(501).send({ error: "Couldn't Find the User/Post" });

            return res.status(201).json(post);
        })

    } catch (error) {
        return res.status(404).send({ error: "Cannot Find Post Data" });
    }

}


/** PUT: http://localhost:8080/api/post/id 
 * @param: {
  "header" : "<token>"
}
body: {
    "title" : "", 
    "description" : "",
    "content": "",
    "author" : "",
}
*/
export async function updatePost(req, res) {
    try {

        const { postId } = req.body;

        if (postId) {
            const body = req.body;

            // update the data
            PostModel.updateOne({ _id: postId }, body, function (err, data) {
                if (err) throw err;

                return res.status(201).send({ msg: "Record Updated...!" })
            })

        } else {
            return res.status(404).send({ error: "Post Not Found...!" });
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}


/** DELETE: http://localhost:8080/api/post/id 
 * @param: {
  "header" : "<token>"
}
*/
export async function deletePost(req, res) {
    try {

        const { postId } = req.params;

        if (postId) {
            // delete the data
            PostModel.deleteOne({ _id: postId }, function (err, data) {
                if (err) throw err;

                return res.status(201).send({ msg: "Record Deleted...!" });
            })

        } else {
            return res.status(404).send({ error: "Post Not Found...!" });
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}


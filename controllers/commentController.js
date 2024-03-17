import CommentModel from '../model/Comment.model.js';

/** POST: http://localhost:8080/api/comment/create 
 * @param : {
  "post" : "post",
  "content": "media file link",
  "author" : "bill"
}
*/
export async function create(req, res) {
 try {
  const { post, content, author } = req.body;

  const comment = new CommentModel({
   author: author,
   post: post,
   content: content,
  });

  // return save result as a response
  comment
   .save()
   .then((result) =>
    res
     .status(201)
     .send({ msg: 'Comment created Successfully', Comment: comment })
   )
   .catch((error) => res.status(500).send({ error }));
 } catch (error) {
  return res.status(500).send(error);
 }
}

/** GET: http://localhost:8080/api/comment/post1234/ */
export async function getPostComments(req, res) {
 const { postId } = req.params;

 try {
  if (!postId) return res.status(501).send({ error: 'Invalid Post' });

  CommentModel.find({ post: postId }, function (err, data) {
   if (err) return res.status(500).send({ err });
   if (!data)
    return res
     .status(501)
     .send({ error: "Couldn't Find the Comments for this Posts" });

   return res.status(201).json(data);
  });
 } catch (error) {
  return res.status(404).send({ error: 'Cannot Find Post Data' });
 }
}

/** GET: http://localhost:8080/api/comment/id */
export async function getComment(req, res) {
 const { commentId } = req.params;

 try {
  if (!commentId) return res.status(501).send({ error: 'Invalid Comment' });

  CommentModel.find({ _id: commentId }, function (err, post) {
   if (err) return res.status(500).send({ err });
   if (!post)
    return res.status(501).send({ error: "Couldn't Find the Comment" });
   tus(201).json(post);
  });
 } catch (error) {
  return res.status(404).send({ error: 'Cannot Find Comment Data' });
 }
}

/** PUT: http://localhost:8080/api/comment/id 
 * @param: {
  "header" : "<token>"
}
body: { 
    "content": ""
}
*/
export async function updateComment(req, res) {
 try {
  const { commentId } = req.body;

  if (commentId) {
   const body = req.body;

   // update the data
   CommentModel.updateOne({ _id: commentId }, body, function (err, data) {
    if (err) throw err;

    return res.status(201).send({ msg: 'Record Updated...!' });
   });
  } else {
   return res.status(404).send({ error: 'Comment Not Found...!' });
  }
 } catch (error) {
  return res.status(401).send({ error });
 }
}

/** DELETE: http://localhost:8080/api/comment/id 
 * @param: {
  "header" : "<token>"
}
*/
export async function deleteComment(req, res) {
 try {
  const { commentId } = req.params;

  if (commentId) {
   // delete the data
   CommentModel.deleteOne({ _id: commentId }, function (err, data) {
    if (err) throw err;

    return res.status(201).send({ msg: 'Record Deleted...!' });
   });
  } else {
   return res.status(404).send({ error: 'Comment Not Found...!' });
  }
 } catch (error) {
  return res.status(401).send({ error });
 }
}

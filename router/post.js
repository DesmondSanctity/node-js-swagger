import { Router } from "express";
const postRouter = Router();

/** import all controllers */
import * as controller from '../controllers/postController.js';



/** POST Methods */

postRouter.route('/').post(controller.create); // create post or content

/** GET Methods */

postRouter.route('/:userId').get(controller.getUserPosts) // get all user posts with username
postRouter.route('/:userId/:postId').get(controller.getUserPost) // get a single user post with username and post id


/** PUT Methods */

postRouter.route('/update').put(controller.updatePost); // is use to update the post

/** DELETE Methods */

postRouter.route('/:postId').delete(controller.deletePost); // is use to delete the post



export default postRouter;
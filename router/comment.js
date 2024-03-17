import { Router } from 'express';
const commentRouter = Router();

/** import all controllers */
import * as controller from '../controllers/commentController.js';

/** POST Methods */

commentRouter.route('/').post(controller.create); // create post or content

/** GET Methods */

commentRouter.route('/:postId').get(controller.getPostComments); // get all post's comments
commentRouter.route('/:commentId').get(controller.getComment); // get a single user post with username and post id

/** PUT Methods */

commentRouter.route('/update').put(controller.updateComment); // is use to update the post

/** DELETE Methods */

commentRouter.route('/:postId').delete(controller.deleteComment); // is use to delete the post

export default commentRouter;

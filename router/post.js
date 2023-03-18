import { Router } from "express";
const postRouter = Router();

/** import all controllers */
import * as controller from '../controllers/postController.js';
import Auth from '../middleware/auth.js';



/** POST Methods */

/**
 * @openapi
 * '/api/post':
 *  post:
 *     tags:
 *     - Post Controller
 *     summary: Create a post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - description
 *              - content
 *              - author
 *            properties:
 *              title:
 *                type: string
 *                default:  Post 
 *              description:
 *                type: string
 *                default: New post
 *              content:
 *                type: string
 *                default:  This is a new blog post
 *              author:
 *                type: string
 *                default: meme
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/').post(controller.create); // create post or content

/** GET Methods */

/**
 * @openapi
 * '/api/post/{userId}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get posts by creator's username
 *     parameters:
 *      - name: userId
 *        in: path
 *        schema:
 *           type: string
 *        description: The username of the creator
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/:userId').get(controller.getUserPosts) // get all user posts with username

/**
 * @openapi
 * '/api/post/{userId}/{postId}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get single post by creator's username and postId
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The username of the creator
 *        required: true
 *      - name: postId
 *        in: path
 *        description: The post Id of the post
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/:userId/:postId').get(controller.getUserPost) // get a single user post with username and post id


/** PUT Methods */

/**
 * @openapi
 * '/api/post/update':
 *  put:
 *     tags:
 *     - Post Controller
 *     summary: Modify a post
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - postId
 *            properties:
 *              postId:
 *                type: string
 *                default: ''
 *              title:
 *                type: string
 *                default:  Update 
 *              description:
 *                type: string
 *                default: Updated post
 *              content:
 *                type: string
 *                default:  This is a updated blog post
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/update').put(controller.updatePost); // is use to update the post

/** DELETE Methods */

/**
 * @openapi
 * '/api/post/{postId}':
 *  delete:
 *     tags:
 *     - Post Controller
 *     summary: Delete post by Id
 *     parameters:
 *      - name: postId
 *        in: path
 *        description: The unique Id of the post
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
postRouter.route('/:postId').delete(controller.deletePost); // is use to delete the post



export default postRouter;
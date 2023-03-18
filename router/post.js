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
 *              - contentType
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
 *                default: https://joeschmoe.io/api/v1/random
 *              contentType:
 *                type: string
 *                default: community
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
 * '/api/post/{username}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get posts by creator's username
 *     parameters:
 *      - name: username
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
postRouter.route('/:username').get(controller.getUserPosts) // get all user posts with username

/**
 * @openapi
 * '/api/post/{username}/{id}':
 *  get:
 *     tags:
 *     - Post Controller
 *     summary: Get single post by creator's username and postId
 *     parameters:
 *      - name: username
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
postRouter.route('/:username/:id').get(controller.getUserPost) // get a single user post with username and post id


/** PUT Methods */

/**
 * @openapi
 * '/api/post/{id}':
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
postRouter.route('/:id').put(Auth, controller.updatePost); // is use to update the post

/** DELETE Methods */

/**
 * @openapi
 * '/api/post/{id}':
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
postRouter.route('/:id').delete(Auth, controller.deletePost); // is use to delete the post



export default postRouter;
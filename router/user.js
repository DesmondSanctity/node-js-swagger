import { Router } from "express";
const userRouter = Router();

/** import all controllers */
import * as controller from '../controllers/userController.js';
import Auth from '../middleware/auth.js';



/** POST Methods */
userRouter.route('/register').post(controller.register); // register user
userRouter.route('/verify').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
userRouter.route('/login').post(controller.verifyUser,controller.login); // login in app

/** GET Methods */
userRouter.route('/user/:username').get(controller.getUser) // user with username


/** PUT Methods */
userRouter.route('/update').put(Auth, controller.updateUser); // is use to update the user profile

/** DELETE Methods */
userRouter.route('/delete').delete(Auth, controller.deleteUser);



export default userRouter;
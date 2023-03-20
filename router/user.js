import { Router } from "express";
const userRouter = Router();

/** import all controllers */
import * as controller from '../controllers/userController.js';



/** POST Methods */

userRouter.route('/register').post(controller.register); // register user
userRouter.route('/login').post(controller.verifyUser,controller.login); // login in app
userRouter.route('/verify').post(controller.verifyUser, (req, res) => res.end()); // authenticate user


/** GET Methods */

userRouter.route('/:username').get(controller.getUser) // user with username

/** PUT Methods */

userRouter.route('/update').put(controller.updateUser); // is use to update the user profile

/** DELETE Methods */

userRouter.route('/:userId').delete(controller.deleteUser);



export default userRouter;
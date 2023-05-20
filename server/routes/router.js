const express = require("express");
const {auth} = require('../../middlewares');

//the next line rahter than --const app = express();-- cause will create new app if used it
const route = express.Router();
// now: rather than use -app.get()....;- will use route.get()

// get all routs form services
const services = require("../services/render");

// get all routs -API- form FolderController
const { folderController } = require("../controller");

// get all routs -API- form AuthController
const { authController } = require("../controller");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRotes);

//API

// ==================================AUTH--API======================================
route.post("/auth/register", authController.register);
route.post("/auth/login", authController.login);
route.post("/auth/forgot-password", authController.forgetPassword);
route.post("/auth/reset-password", authController.resetPassword);
route.get("/auth/me",auth, authController.me);
// ==================================AUTH--API======================================

// ==================================FOLDERS--API======================================
route.post("/folder/add-image",auth, folderController.addImage);
route.post("/folder/add-folder",auth, folderController.addFolder);
route.get("/folder/list1",auth, folderController.list);
route.get("/folder/list2",auth, folderController.list2);
route.get("/folder/:id/get",auth, folderController.get);
route.post("/folder/:id/edit",auth, folderController.rename);
route.post("/folder/delete",auth, folderController.delete);
route.post("/folder/moveTo/:id",auth, folderController.move);
// ==================================FOLDERS--API======================================

module.exports = route;

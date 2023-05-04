const express = require("express");

//the next line rahter than --const app = express();-- cause will create new app if used it
const route = express.Router(); 
// now: rather than use -app.get()....;- will use route.get()

// get all routs form services
const services = require('../services/render');

// get all routs -API- form FolderController
const {folderController} = require('../controller');

// get all routs -API- form AuthController
const {authController} = require('../controller');
  

/**
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRotes);



//API

// ==================================AUTH--API======================================
 route.post('/api/auth/register',authController.register);
 route.post('/api/auth/login',authController.login);
 route.post('/api/auth/me',authController.me);
 route.post('/api/auth/forget-password',authController.forgetPassword);
 route.post('/api/auth/reset-password',authController.resetPassword);
// ==================================AUTH--API======================================


// ==================================FOLDERS--API======================================
route.post('/api/folder/add-image',folderController.addImage);
route.post('/api/folder/add-folder',folderController.addFolder);
route.get('/api/folder/:id/list1',folderController.list);
route.get('/api/folder/:id/list2',folderController.list2);
route.post('/api/folder/:id/edit',folderController.rename);
route.post('/api/folder/delete',folderController.delete);
route.post('/api/folder/move',folderController.move);
// ==================================FOLDERS--API======================================

module.exports = route
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
//* IMPORTS
const logout_1 = require("./routes/auth/logout");
const login_1 = require("./routes/auth/login");
const register_1 = require("./routes/auth/register");
const saveArticle_1 = require("./routes/articles/saveArticle");
const removeArticle_1 = require("./routes/articles/removeArticle");
const removeFolder_1 = require("./routes/folders/removeFolder");
const removeClass_1 = require("./routes/classes/removeClass");
const editArticle_1 = require("./routes/articles/editArticle");
const moveArticleToFolder_1 = require("./routes/articles/moveArticleToFolder");
const moveArticleToClass_1 = require("./routes/articles/moveArticleToClass");
const moveFolderToClass_1 = require("./routes/folders/moveFolderToClass");
const editFolder_1 = require("./routes/folders/editFolder");
const createFolder_1 = require("./routes/folders/createFolder");
const createClass_1 = require("./routes/classes/createClass");
const editClass_1 = require("./routes/classes/editClass");
const requiresAuth_1 = require("./routes/auth/requiresAuth");
const validateToken_1 = require("./routes/auth/validateToken");
const sendDashboard_1 = require("./routes/user/sendDashboard");
const sendClasses_1 = require("./routes/user/sendClasses");
const sendClass_1 = require("./routes/classes/sendClass");
const findArticle_1 = require("./routes/articles/findArticle");
//* ROUTES
//* GET
router.get('/validateToken', requiresAuth_1.requiresAuth, validateToken_1.validateToken);
router.get('/user/dashboard', requiresAuth_1.requiresAuth, sendDashboard_1.sendDashboard);
router.get('/user/classes', requiresAuth_1.requiresAuth, sendClasses_1.sendClasses);
router.get("/class/:class", requiresAuth_1.requiresAuth, sendClass_1.sendClass);
router.get('/article/:article', findArticle_1.findArticle);
//* POST
//auth
router.post('/logout', logout_1.logout);
router.post('/login', login_1.login);
router.post('/register', register_1.register);
//articles
router.post('/article/save', requiresAuth_1.requiresAuth, saveArticle_1.saveArticle);
router.post('/article/edit', requiresAuth_1.requiresAuth, editArticle_1.editArticle);
//folders
router.post('/folder/create', requiresAuth_1.requiresAuth, createFolder_1.createFolder);
router.post('/folder/edit', requiresAuth_1.requiresAuth, editFolder_1.editFolder);
//classes
router.post('/classes/create', requiresAuth_1.requiresAuth, createClass_1.createClass);
router.post('/classes/edit', requiresAuth_1.requiresAuth, editClass_1.editClass);
//* PATCH
router.patch('/article/move/folder', requiresAuth_1.requiresAuth, moveArticleToFolder_1.moveArticleToFolder);
router.patch('/article/move/class', requiresAuth_1.requiresAuth, moveArticleToClass_1.moveArticleToClass);
router.patch('/folder/move/class', requiresAuth_1.requiresAuth, moveFolderToClass_1.moveFolderToClass);
//* DELETE
router.delete('/article/remove', requiresAuth_1.requiresAuth, removeArticle_1.removeArticle);
router.delete('/folder/remove', requiresAuth_1.requiresAuth, removeFolder_1.removeFolder);
router.delete('/class/remove', requiresAuth_1.requiresAuth, removeClass_1.removeClass);

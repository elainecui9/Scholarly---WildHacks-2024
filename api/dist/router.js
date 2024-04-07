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
//* ROUTES
//* GET
router.get('');
//* POST
//auth
router.post('/logout', logout_1.logout);
router.post('/login', login_1.login);
router.post('/register', register_1.register);
//articles
router.post('/article/save', saveArticle_1.saveArticle);
router.post('/article/edit', editArticle_1.editArticle);
//folders
router.post('/folder/create', createFolder_1.createFolder);
router.post('/folder/edit', editFolder_1.editFolder);
//classes
router.post('/classes/create', createClass_1.createClass);
router.post('/classes/edit', editClass_1.editClass);
//* PATCH
router.patch('/article/move/folder', moveArticleToFolder_1.moveArticleToFolder);
router.patch('/article/move/class', moveArticleToClass_1.moveArticleToClass);
router.patch('/folder/move/class', moveFolderToClass_1.moveFolderToClass);
//* DELETE
router.delete('/article/remove', removeArticle_1.removeArticle);
router.delete('/folder/remove', removeFolder_1.removeFolder);
router.delete('/class/remove', removeClass_1.removeClass);

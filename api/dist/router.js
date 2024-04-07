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
const createArticle_1 = require("./routes/articles/createArticle");
//* ROUTES
// POST
//auth
router.post('/logout', logout_1.logout);
router.post('/login', login_1.login);
router.post('/register', register_1.register);
//articles
router.post('/createArticle', createArticle_1.createArticle);

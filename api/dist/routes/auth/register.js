"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const User_1 = require("../../models/User");
const joi = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().required().email(),
    password: joi_1.default.string().min(6).required(),
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield joi.validateAsync(req.body);
        let exists = yield User_1.User.findOne({ email: req.body.email });
        if (exists) {
            return res.status(400).send("Email already registered: meant to sign in?");
        }
        const user = new User_1.User(req.body);
        user.password = yield bcryptjs_1.default.hash(req.body.password, 10);
        yield user.save();
        const payload = {
            _id: user._id
        };
        const token = jsonwebtoken_1.default.sign(payload, process.env.PRIVATEKEY);
        if (req.cookies['auth-token']) {
            res.clearCookie('auth-token');
        }
        res.cookie('auth-token', token, {
            //lasts 2 weeks
            expires: new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000 * 2),
            secure: true,
            sameSite: 'strict',
            httpOnly: true,
        }).status(200).json(`Welcome, ${user.firstName}!`);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.register = register;

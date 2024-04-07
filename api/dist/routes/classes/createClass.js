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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClass = void 0;
const Class_1 = require("../../models/Class");
const User_1 = require("../../models/User");
const createClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let code = Math.random().toString(36).substring(2, 8);
        let codeExists = yield Class_1.Class.exists({ code: code });
        if (codeExists) {
            code = Math.random().toString(36).substring(2, 8);
            while (codeExists) {
                codeExists = yield Class_1.Class.exists({ code: code });
            }
        }
        const newClass = new Class_1.Class({
            owner: req.body.payload._id,
            mutable: req.body.mutable,
            code: code,
            name: req.body.name,
            color: req.body.color,
            articles: [],
            date: Date.now(),
        });
        yield newClass.save();
        yield User_1.User.findByIdAndUpdate(req.body.payload._id, { $push: { classes: newClass._id } });
        res.status(200).json(`Your access code is ${code}`);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createClass = createClass;

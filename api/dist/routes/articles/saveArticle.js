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
exports.saveArticle = void 0;
const Article_1 = require("../../models/Article");
const Folder_1 = require("../../models/Folder");
const User_1 = require("../../models/User");
//save to dashboard
//save to class
// save to class->folder
// save to folder
const saveArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = new Article_1.Article({
            title: req.body.title,
            content: req.body.content,
            url: req.body.url,
            authors: req.body.authors,
            date: Date.now(),
        });
        yield article.save();
        if (req.body.folder) {
            yield Folder_1.Folder.findOneAndUpdate({ _id: req.body.folder }, { $push: { articles: article._id } });
        }
        else {
            yield User_1.User.findOneAndUpdate({ _id: req.body.payload._id }, { $push: { articles: article._id } });
        }
        res.status(200).send("Successfully saved article");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.saveArticle = saveArticle;

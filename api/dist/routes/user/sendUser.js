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
exports.sendUser = void 0;
const User_1 = require("../../models/User");
const Article_1 = require("../../models/Article");
const Folder_1 = require("../../models/Folder");
const sendUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body.payload;
        const user = yield User_1.User.findById(payload._id);
        const articlesData = yield Article_1.Article.find({
            "_id": {
                $in: user.articles
            }
        });
        const foldersData = yield Folder_1.Folder.find({
            "_id": {
                $in: user.folders
            }
        });
        const articles = articlesData.map((article) => {
            return {
                _id: article._id,
                title: article.title,
                date: article.date
            };
        });
        const folders = yield Promise.all(foldersData.map((folder) => __awaiter(void 0, void 0, void 0, function* () {
            const articles = yield Article_1.Article.find({
                "_id": {
                    $in: folder.articles
                }
            });
            const articlePreviews = articles.map((article) => {
                return {
                    _id: article._id,
                    title: article.title,
                    date: article.date
                };
            });
            return {
                _id: folder._id,
                name: folder.name,
                color: folder.color,
                date: folder.date,
                articles: articlePreviews
            };
        })));
        const data = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            folders: folders,
            articles: articles
        };
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.sendUser = sendUser;

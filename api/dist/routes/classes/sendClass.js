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
exports.sendClass = void 0;
const User_1 = require("../../models/User");
const Article_1 = require("../../models/Article");
const Folder_1 = require("../../models/Folder");
const Class_1 = require("../../models/Class");
const sendClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classData = yield Class_1.Class.findById(req.body.params.class);
        const membersData = yield User_1.User.find({
            "_id": {
                $in: classData.members
            }
        });
        const articlesData = yield Article_1.Article.find({
            "_id": {
                $in: classData.articles
            }
        });
        const foldersData = yield Folder_1.Folder.find({
            "_id": {
                $in: classData.folders
            }
        });
        const members = membersData.map((user) => {
            return {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            };
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
        const classInterface = {
            _id: classData._id,
            owner: classData.owner,
            name: classData.name,
            date: classData.date,
            mutable: classData.mutable,
            code: classData.code,
            members: members,
            articles: articles,
            folders: folders
        };
        res.status(200).json(classInterface);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.sendClass = sendClass;

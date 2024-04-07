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
exports.createFolder = void 0;
const Folder_1 = require("../../models/Folder");
const Class_1 = require("../../models/Class");
const User_1 = require("../../models/User");
const createFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const folder = new Folder_1.Folder({
            owner: req.body.payload._id,
            name: req.body.name,
            color: req.body.color,
            articles: [],
            date: Date.now(),
        });
        yield folder.save();
        yield User_1.User.findByIdAndUpdate(req.body.payload._id, { $push: { folders: folder._id } });
        if (req.body.class) {
            yield Class_1.Class.findByIdAndUpdate(req.body.class, { $push: { folders: folder._id } });
        }
        res.status(200).send("Folder successfully created");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createFolder = createFolder;

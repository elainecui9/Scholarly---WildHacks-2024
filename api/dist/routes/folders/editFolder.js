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
exports.editFolder = void 0;
const Folder_1 = require("../../models/Folder");
const editFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.color) {
            yield Folder_1.Folder.findByIdAndUpdate(req.body.folder, { $set: { color: req.body.color } });
        }
        else if (req.body.name) {
            yield Folder_1.Folder.findByIdAndUpdate(req.body.folder, { $set: { name: req.body.name } });
        }
        res.status(200).send("Successfully updated folder");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.editFolder = editFolder;

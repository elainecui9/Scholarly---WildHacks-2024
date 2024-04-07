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
exports.sendClasses = void 0;
const User_1 = require("../../models/User");
const Class_1 = require("../../models/Class");
const sendClasses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body.payload;
        const user = yield User_1.User.findById(payload._id);
        const classesData = yield Class_1.Class.find({
            '_id': {
                $in: user.classes
            }
        });
        const classes = classesData.map((el) => {
            return {
                _id: el._id,
                owner: el.owner,
                name: el.name,
                date: el.date
            };
        });
        res.status(200).json(classes);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.sendClasses = sendClasses;

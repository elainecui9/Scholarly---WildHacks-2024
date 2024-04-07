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
exports.removeClass = void 0;
const Class_1 = require("../../models/Class");
const removeClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Class_1.Class.findByIdAndDelete(req.body._id);
        res.status(200).send("Successfully deleted");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.removeClass = removeClass;

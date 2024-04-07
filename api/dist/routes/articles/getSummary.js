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
exports.getSummary = void 0;
// import superagent from 'superagent'
const got_1 = __importDefault(require("got"));
const getSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = {
            url: req.body.url,
            complexity: req.body.complexity,
            mode: req.body.mode
        };
        // const data = await fetch('http://127.0.0.1/8000/article_summary', {
        //     method: "POST",
        //     credentials: "include",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        // })
        // console.log("ASDASD")
        // const summary = await data.json()
        // const data = await superagent.post('http://127.0.0.1/8000/article_summary').send(body)
        // const summary = await data.json()
        const data = yield got_1.default.post('http://127.0.0.1/8000/article_summary', {
            json: body
        }).json();
        // const json = await ky.post('http://127.0.0.1/8000/article_summary', {json: body}).json()
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getSummary = getSummary;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var testData_1 = require("./testData");
var port = 3000;
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/get-testdata', function (req, res) {
    res.json(testData_1.testData);
});
app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// The consumer of this type definition file
// service.ts
var express_1 = __importDefault(require("express"));
var enum_test_1 = require("enum-test");
var myObject = {
    stringAttribute: "Awsome",
    enumAttribute: enum_test_1.EnumType.TYPE_A,
};
var app = express_1.default();
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
    console.log('Account is' + myObject.stringAttribute);
});

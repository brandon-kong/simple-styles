"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = __importDefault(require("../../../../src/react/ui/button"));
function Home() {
    return ((0, jsx_runtime_1.jsx)("main", { className: "", children: (0, jsx_runtime_1.jsx)(button_1.default, { children: "Testing" }) }));
}
exports.default = Home;

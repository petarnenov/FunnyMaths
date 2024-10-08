"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Examine_1 = __importDefault(require("./Examine"));
function res() {
    let addTag = document.getElementById('exercises');
    if (!addTag) {
        return;
    }
    while (addTag.hasChildNodes()) {
        if (addTag.firstChild) {
            addTag.removeChild(addTag.firstChild);
        }
    }
    Examine_1.default.badAnswer = 0;
    Examine_1.default.goodJob = 0;
    Examine_1.default.showResults();
    for (let i = 0; i < 10; i++) {
        let examine = new Examine_1.default();
        examine.generateExercise();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    res();
});

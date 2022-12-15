"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/From/:from/To/:to', (req, res) => {
    res.json(fizzbuzz());
    function fizzbuzz() {
        var i = Number(req.params.from);
        var j = Number(req.params.to);
        var k = 0;
        let fizzBuzz = [];
        for (i; i <= j; i++) {
            if (i % 3 == 0 && i % 7 == 0) {
                fizzBuzz[k] = "FizzBuzz";
                k++;
            }
            else if (i % 3 == 0) {
                fizzBuzz[k] = "Fizz";
                k++;
            }
            else if (i % 7 == 0) {
                fizzBuzz[k] = "Buzz";
                k++;
            }
            else {
                fizzBuzz[k] = i.toString();
                k++;
            }
        }
        console.log(fizzBuzz);
        let json = JSON.stringify(fizzBuzz);
        return json;
    }
});
app.listen(4000, () => console.log("listening on port 4000"));

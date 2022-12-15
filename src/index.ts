import express, { Request, Response } from "express";

const app = express();

app.get('/From/:from/To/:to', (req: Request, res: Response) => {
    res.json(
    fizzbuzz()
    )

    function fizzbuzz(){
        var i = Number(req.params.from)
        var j = Number(req.params.to)
        var k = 0

        let fizzBuzz: Array<string> = [];

        for (i; i<=j; i++){
            if(i%3 ==0 && i%7 ==0){
                fizzBuzz[k]="FizzBuzz"
                k++
            }
            else if(i%3 ==0){
                fizzBuzz[k]="Fizz"
                k++
            }
            else if(i%7 ==0){
                fizzBuzz[k]="Buzz"
                k++
            }
            else {
                fizzBuzz[k]=i.toString()
                k++
            }
            
        }

        console.log(fizzBuzz)

        let json = JSON.stringify(fizzBuzz)

        return json
    }
});



app.listen(9876, () => console.log("listening on port 9876"))

import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import launchesRouter from "./routes/launches.routes"
import rocketsRouter from "./routes/rockets.routes"
import * as cors from 'cors';

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(cors<Request>()); 

    app.get("/",(req,res)=>{
        res.send("Fullstack Challenge 🏅 - Space X API")
    })

    // setup express app here
    app.use('/launches', launchesRouter);
    app.use('/rockets', rocketsRouter);

    // start express server
    app.listen(3000)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))

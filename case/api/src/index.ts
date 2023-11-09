import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import launchesRouter from "./routes/launches.routes"
import rocketsRouter from "./routes/rockets.routes"
import * as cors from 'cors';
import axios from "axios";
var cron = require('node-cron');


AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(cors<Request>());

    app.get("/", (req, res) => {
        res.send("Fullstack Challenge 🏅 - Space X API")
    })

    // setup express app here
    app.use('/launches', launchesRouter);
    app.use('/rockets', rocketsRouter);

    // start express server
    app.listen(3000)

    var task = cron.schedule('0 0 9 * * *', () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/launches',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

        config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/rockets',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    });

    task.start();

    console.log("Express server has started on http://localhost:3000/ ")

}).catch(error => console.log(error))

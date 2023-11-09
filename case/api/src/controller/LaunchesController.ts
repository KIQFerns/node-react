import { AppDataSource } from "../data-source"
import { Request, Response } from 'express';
import { Launches } from '../entity/Launches';
import axios from "axios";
import { AllLaunchesService, DataChartService } from '../services/launches.service';

export const allLaunchers = async (req: Request, res: Response) => {
    const LaunchesRepository = AppDataSource.getRepository(Launches)

    const take = req.query.limit || 10000
    const start = req.query.skip || 0
    const search = req.query.search || ''


    const result = await AllLaunchesService(take as number, start as number, search as string);

    res.status(200).send(result);

};

export const dataChart = async (req: Request, res: Response) => {
    const LaunchesRepository = AppDataSource.getRepository(Launches)

    const result = await DataChartService();

    res.status(200).send(result);

};

export const requestLastLaunchers = async (req: Request, res: Response) => {
    const LaunchesRepository = AppDataSource.getRepository(Launches)

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.spacexdata.com/v5/launches',
        headers: {}
    };

    axios.request(config)
        .then((response) => {

            for (let item of response.data) {
                const { launchpad, auto_update, flight_number, rocket, success, name, date_utc, links } = item;
                const video = links['youtube_id']
                const logo = links['patch']['small']
                const launches = Object.assign(new Launches(), {
                    launchpad,
                    auto_update,
                    flight_number,
                    success,
                    rocket,
                    name,
                    date_utc,
                    video,
                    logo
                })

                LaunchesRepository.save(launches)
            }
            return
        })
        .catch((error) => {
            console.log(error);
        });

    res.send("data updated");
};
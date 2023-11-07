import { AppDataSource } from "../data-source"
import { Request, Response } from 'express';
import { Launches } from '../entity/Launches';
import axios from "axios";

export const allLaunchers = async (req: Request, res: Response) => {   
  const LaunchesRepository =AppDataSource.getRepository(Launches)

  const players = await LaunchesRepository.find({
    relations: ["rockets"],
    take: 10,
  });
  res.send(players);
};

export const requestLastLaunchers = async (req: Request, res: Response) => {   
    const LaunchesRepository =AppDataSource.getRepository(Launches)

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
import { AppDataSource } from "../data-source"
import { Request, Response } from 'express';
import { Rockets } from '../entity/Rockets';
import axios from "axios";
import { CreateRockets1698409836350 } from "../migration/1698409836350-CreateRockets";

export const allRockets = async (req: Request, res: Response) => {
    const RocketsRepository = AppDataSource.getRepository(Rockets)

    const players = await RocketsRepository.find();
    res.send(players);
};

export const requestRockets = async (req: Request, res: Response) => {
    const RocketsRepository = AppDataSource.getRepository(Rockets)

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.spacexdata.com/v4/rockets',
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            for (let item of response.data) {
                const { id, name, type, description } = item;
                const rockets = Object.assign(new CreateRockets1698409836350(), {
                    id,
                    name,
                    type,
                    description
                })

                RocketsRepository.save(rockets)
            }
            return
        })
        .catch((error) => {
            console.log(error);
        });

    res.send("data updated");
};
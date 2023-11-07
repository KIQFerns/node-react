import "reflect-metadata"
import { DataSource } from "typeorm"
import { Launches } from "./entity/Launches"
import { Rockets } from "./entity/Rockets"
import { CreateRockets1698409836350 } from "./migration/1698409836350-CreateRockets"
import { CreateLaunches1698524415379 } from "./migration/1698524415379-CreateLaunches"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Rockets, Launches],
    migrations: [CreateRockets1698409836350, CreateLaunches1698524415379],
    subscribers: [],
})

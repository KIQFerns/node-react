import { AppDataSource } from "../data-source"
import { Launches } from '../entity/Launches';
import { Like } from "typeorm";

export const AllLaunchesService = async (take: number, start: number, search: string) => {
  const LaunchesRepository = AppDataSource.getRepository(Launches)

  const launches = await LaunchesRepository.findAndCount({
    where: { name: Like("%" + search + "%") },
    relations: ["rockets"],
    take: take,
    skip: start
  });

  return { results: launches[0], totalDocs: launches[1], page: "", totalPages: Math.floor(launches[1] / (take as number)), hasNext: "", hasPrev: "" };
};

export const DataChartService = async () => {
  const LaunchesRepository = AppDataSource.getRepository(Launches)

  const firstData = await LaunchesRepository.createQueryBuilder('launches')
    .select("COUNT(launches.rocket)", "value")
    .addSelect("rocket.name", "label")
    .leftJoin('launches.rockets', 'rocket')
    .groupBy("launches.rocket")
    .addGroupBy('rocket.name')
    .getRawMany();

  const secondData = await LaunchesRepository.createQueryBuilder('launches')
    .select("COUNT(launches.rocket)", "value")
    .addSelect("rocket.name", "label")
    .leftJoin('launches.rockets', 'rocket')
    .groupBy("launches.rocket")
    .addGroupBy('rocket.name')
    .getRawMany();

  return {firstData, secondData}
};

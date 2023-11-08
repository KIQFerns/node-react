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

  const Years = await LaunchesRepository.createQueryBuilder('launches')
    .select("DATE_PART('year',date_utc)")
    .distinct(true)
    .orderBy("DATE_PART('year',date_utc)")
    .getRawMany();

  const xlabel = Years.map(r => r.date_part);

  const RocketsData = await LaunchesRepository.createQueryBuilder('launches')
    .select("rocket.name", "label")
    .distinct(true)
    .leftJoin('launches.rockets', 'rocket')
    .orderBy("rocket.name")
    .getRawMany();

  const Rockets = RocketsData.map(r => r.label);



  const values = await LaunchesRepository.createQueryBuilder('launches')
    .select("rocket.name", "label")
    .addSelect("COUNT(launches.rocket)", "value")
    .addSelect("DATE_PART('year',date_utc)")
    .leftJoin('launches.rockets', 'rocket')
    .groupBy("launches.rocket")
    .addGroupBy('rocket.name')
    .addGroupBy("DATE_PART('year',date_utc)")
    .orderBy("DATE_PART('year',date_utc)")
    .getRawMany();

    const final = RocketsData.map(rocket => {
    xlabel.forEach((year, index) => {
      var necessidade = [];
      values.forEach((o, i) => {
        if (o.label === rocket.label) {
          necessidade[index] = o.value;
        } else {
          necessidade[index] = 0;
        }
      });

      return  necessidade;

    });
  });


  return { firstData, Years: xlabel, Rockets: Rockets, values: values, final: final }
};

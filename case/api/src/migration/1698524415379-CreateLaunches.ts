import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLaunches1698524415379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "launches",
            columns: [
                { name: "launchpad", type: "varchar", isNullable: true },
                { name: "auto_update", type: "boolean" },
                { name: "flight_number", type: "int" },
                { name: "success", type: "boolean" },
                { name: "rocket", type: "varchar" },
                { name: "logo", type: "varchar" },
                { name: "name", type: "varchar" },
                { name: "date_utc", type: "date" },
                { name: "video", type: "date" },
            ],
            foreignKeys: [{
                name: "fk_launches_rocket",
                columnNames:["rocket"],
                referencedTableName: "rockets",
                referencedColumnNames: ["id"]
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("launches");
    }

}

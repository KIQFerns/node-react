import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRockets1698409836350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "rockets",
            columns: [
                { name: "id", type: "varchar", isUnique: true, isNullable: false },
                { name: "name", type: "varchar" },
                { name: "type", type: "varchar" },
                { name: "description", type: "varchar" },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rockets");
    }

}

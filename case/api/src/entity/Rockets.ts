import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Rockets {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    type: string

    @Column()
    description: string

}

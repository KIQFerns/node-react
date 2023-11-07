import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Rockets } from "./Rockets"

@Entity()
export class Launches {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true })
    launchpad: string

    @Column({nullable: true })
    auto_update: boolean

    @Column({nullable: true })
    flight_number: number

    @Column({nullable: true })
    success: boolean

    @Column({nullable: true })
    logo: string

    @Column({nullable: true })
    name: string

    @Column({nullable: true })
    date_utc: Date

    @Column({nullable: true })
    video: string

    @Column({nullable: true })
    rocket: string

    @ManyToOne(() => Rockets)
    @JoinColumn({name:"rocket"})
    rockets: Rockets

}
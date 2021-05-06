import {Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany} from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Activy } from './Activy'

@Entity("Course_Unit")
class CourseUnit{

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    create_at: Date
    
    @OneToMany(() => Activy, activy => activy.course_unit_id)
    activies: Activy[]
}

export {CourseUnit}
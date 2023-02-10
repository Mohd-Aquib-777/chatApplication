import { BaseEntity, Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
// import reflect-metadata from ""
@Entity()
class User extends BaseEntity {
    @ObjectIdColumn()
    id!: ObjectID

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    email!: string

    @Column()
    username!: string

    @Column()
    gender!: string

    @Column()
    password!: object

    @Column()
    profilePic!: string

    @Column()
    detail!: string

    @Column()
    status!: string

    @Column()
    statusId!: string

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at!: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    public updated_at!: Date
}

export { User }

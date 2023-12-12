import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    public category_id: number;

    @Column()
    public category_name: string;

    @Column()
    public category_entry_date: Date;
}

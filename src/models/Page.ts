import {Table, Column, Model, DataType} from 'sequelize-typescript';

interface PageCreationAttrs {
    title: string;
    description: string;
    content: string;
    urlSlug: string;
}

@Table({
    timestamps: false,
    tableName: "pages"
})
export class Page extends Model<Page, PageCreationAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true})
    id!: number;

    @Column({ type: DataType.STRING })
    title!: string;

    @Column({ type: DataType.STRING })
    description!: string;

    @Column({ type: DataType.STRING(3000) })
    content!: string;

    @Column({ type: DataType.STRING, unique: true })
    urlSlug!: string;
}

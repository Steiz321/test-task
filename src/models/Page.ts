import {DataType} from "sequelize-typescript";

const PageModel = (sequelize: any) => {
    const Page = sequelize.define('Page', {
        id: {
            primaryKey: true,
            type: DataType.INTEGER,
            autoIncrement: true,
            unique: true
        },
        title: {
            type: DataType.STRING
        },
        description: {
            type: DataType.STRING
        },
        content: {
            type: DataType.STRING(3000)
        },
        urlSlug: {
            type: DataType.STRING,
            unique: true
        },
    });

    return Page;
}

export default PageModel;

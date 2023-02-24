import {DataTypes} from "sequelize";

const PageModel = (sequelize: any) => {
    const Page = sequelize.define('Page', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING(3000)
        },
        urlSlug: {
            type: DataTypes.STRING,
            unique: true
        },
    });

    return Page;
}

export default PageModel;

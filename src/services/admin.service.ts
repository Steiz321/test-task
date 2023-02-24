import {IPage} from "../types/IPage";
import { Page } from '../config/database';
import {createPageFile, removePageFile} from "../extensions/File-Manipulator";
import {ApiError} from "../extensions/Api-Error";

class AdminService {
    async createPage(page: IPage): Promise<IPage> {
        const {title, description, content, urlSlug} = page;
        const checkPageUnique = await Page.findOne({
            where: {
                urlSlug
            }
        })
        if(checkPageUnique) {
            throw ApiError.BadRequest('Page with this UrlSlug is already exists!');
        }
        await createPageFile(title, description, content, urlSlug);
        const createdPage = await Page.create(page);
        return createdPage;
    }

    async findAll(): Promise<IPage[]> {
        const pages = await Page.findAll();
        return pages;
    }

    async deletePage(urlSlug: string) {
        await removePageFile(urlSlug);
        const deletedPage = await Page.destroy({
            where: {
                urlSlug
            }
        })
        return deletedPage;
    }
}

const adminService = new AdminService()
export default adminService;

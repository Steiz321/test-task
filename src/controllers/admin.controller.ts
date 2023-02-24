import {NextFunction, Request, Response} from 'express'
import {IPage} from "../types/IPage";
import {TypedReqBody} from "../types/req.type";
import adminService from "../services/admin.service";
import path from "path";
import {validationResult} from "express-validator";
import {ApiError} from "../extensions/Api-Error";


class AdminController {

    async getAdminPage(req: TypedReqBody<void>, res: Response, next: NextFunction) {
        try {
            return res.sendFile(path.resolve('src/page/mainPages/adminPage.html'));
        } catch (err) {
            next(err);
        }
    }

    async getAllPages(req: TypedReqBody<void>, res: Response, next: NextFunction) {
        try {
            const pages = await adminService.findAll();
            return res.status(200).json(pages);
        } catch (err) {
            next(err);
        }
    }

    async getCreatePage(req: TypedReqBody<void>, res: Response, next: NextFunction) {
        try {
            return res.sendFile(path.resolve('src/page/mainPages/createPage.html'));
        } catch (err) {
            next(err);
        }
    }

    async createPage(req: TypedReqBody<IPage>, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                throw next(ApiError.BadRequest('Validation Error!', errors.array()));
            }
            const page =  await adminService.createPage(req.body)
            return res.status(200).json(page)
        } catch (err) {
            next(err);
        }
    }

    async deletePage(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                throw next(ApiError.BadRequest('Validation Error!', errors.array()));
            }
            const urlSlug = req.params.urlSlug;
            const page = await adminService.deletePage(urlSlug);
            return res.status(200).json(page);
        } catch (err) {
            next(err);
        }
    }
}

const adminController = new AdminController();
export default adminController;

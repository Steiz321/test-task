import path from "path";
import {TypedReqBody} from "../types/req.type";
import {NextFunction, Request, Response} from 'express';
import pageService from "../services/page.service";
import {validationResult} from "express-validator";
import {ApiError} from "../extensions/Api-Error";


class PageController {
    async getHomePage(req: TypedReqBody<void>, res: Response, next: NextFunction) {
        try {
            return res.sendFile(path.resolve('page/mainPages/index.html'));
        } catch (err) {
            next(err);
        }
    }

    async getLoginPage(req: TypedReqBody<void>, res: Response, next: NextFunction) {
        try {
            return res.sendFile(path.resolve('page/mainPages/loginPage.html'));
        } catch (err) {
            next(err);
        }
    }

    async getPageBySlug(req: TypedReqBody<void>, res: Response, next: NextFunction) {
        try {
            const slug = req.params.urlSlug;
            return res.sendFile(path.resolve(`page/${slug}.html`))
        } catch (err) {
            next(err);
        }
    }

    async login(req: Request<{ pass: string }>, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                throw next(ApiError.BadRequest('Validation Error!', errors.array()));
            }
            const password = req.body.pass;
            if(pageService.checkPass(password)){
                res.cookie('loggedIn', 'true', { maxAge: 60*60*1000, httpOnly: true });
                return res.redirect('/admin');
            }
            return res.redirect('/login');
        } catch (err) {
            next(err);
        }
    }
}

const pageController = new PageController();
export default pageController;

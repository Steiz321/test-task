import {Router} from "express";
import pageController from "../controllers/page.controller";
import {PageLoginValidationSchema} from "../extensions/Validation-Schemas";

const pageRouter: Router = Router();

pageRouter.get('/', pageController.getHomePage);
pageRouter.get('/login', pageController.getLoginPage);
pageRouter.post('/login', PageLoginValidationSchema, pageController.login);
pageRouter.get('/:urlSlug', pageController.getPageBySlug);

export default pageRouter;

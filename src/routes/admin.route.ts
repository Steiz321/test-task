import {Router} from "express";
import adminController from "../controllers/admin.controller";
import checkAdminLogged from "../middlewares/admin-logged";
import {PageCreateValidateSchema, PageDeleteValidationSchema} from "../extensions/Validation-Schemas";

const adminRouter: Router = Router();

adminRouter.get('/create', checkAdminLogged, adminController.getCreatePage);
adminRouter.post('/create', checkAdminLogged, PageCreateValidateSchema, adminController.createPage)
adminRouter.get('/', checkAdminLogged, adminController.getAdminPage);
adminRouter.get('/pages', checkAdminLogged, adminController.getAllPages);
adminRouter.delete('/:urlSlug', checkAdminLogged, PageDeleteValidationSchema, adminController.deletePage);

export default adminRouter;

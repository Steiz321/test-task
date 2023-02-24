import {Application} from "express";
import adminRouter from "./admin.route";
import pageRouter from "./page.route";

class AppRouter {
    constructor(private app: Application) {}

    init() {
        this.app.use('/admin', adminRouter)
        this.app.use('/', pageRouter);
    }
}

export default AppRouter;

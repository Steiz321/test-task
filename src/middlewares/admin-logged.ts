import {Request, Response, NextFunction} from 'express'

const checkAdminLogged = (req: Request, res: Response, next: NextFunction) => {
    const val = req.cookies['loggedIn'];
    if(val === "true") {
       return next();
    } else {
        return res.redirect('/login')
    }
}

export default checkAdminLogged;

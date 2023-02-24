import { NextFunction, Request, Response } from 'express';
import {ApiError} from "../extensions/Api-Error";

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err);

    if(err instanceof ApiError) {
        return res.status(err.status).json({err})
    }
    return res.status(500).json({message: 'Unexpected error happens!'})
}

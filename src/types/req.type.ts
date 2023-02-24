import { Request } from 'express';

export interface TypedReqBody<T> extends Request {
    body: T;
}

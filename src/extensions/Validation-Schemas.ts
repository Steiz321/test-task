import {body, param} from "express-validator";

export const PageCreateValidateSchema = [
    body('title').exists({ checkFalsy: true }),
    body('description').exists({ checkFalsy: true }),
    body('content').exists({ checkFalsy: true }),
    body('urlSlug').exists({ checkFalsy: true })
]

export const PageDeleteValidationSchema = [
    param('urlSlug').exists({ checkFalsy: true }),
]

export const PageLoginValidationSchema = [
    body('pass').exists({ checkFalsy: true }),
]

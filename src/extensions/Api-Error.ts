
export class ApiError extends Error {
    status: number;
    errors: any[];

    constructor(status: number, message: string, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Please login!');
    }

    static BadRequest(message: string, errors: any[] = []) {
        // @ts-ignore
        return new ApiError(400, message, errors);
    }
}

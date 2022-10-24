"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    constructor() {
        this.sendResponse = (res, status, data) => {
            res.status(status).json({ payload: data });
        };
        this.sendResponseCustom = (res, status, data) => {
            res.status(status).json(data);
        };
        this.sendResponseError = (res, error) => {
            res.status(error.status).json({ message: error.message, detail: error.detail });
        };
    }
}
exports.default = new Helper();

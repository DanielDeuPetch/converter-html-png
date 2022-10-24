"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const ConverterController_1 = require("./controlller/ConverterController");
class StartUp {
    constructor() {
        this.app = express();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET,OPTIONS,PUT,POST,PATCH",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json({ limit: '200mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
        this.app.use(bodyParser.text({ limit: '200mb' }));
    }
    routes() {
        this.app.route('/').get((_req, res) => {
            res.send({ version: '1.0.0' });
        });
        this.app.route('/api/v1/html-to-png-converter').post(ConverterController_1.default.converter);
    }
}
exports.default = new StartUp();

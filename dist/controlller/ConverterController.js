"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const Response_1 = require("./Response");
const PrintReceiptFlow_1 = require("../flow/receipt/PrintReceiptFlow");
class ConverterController {
    converter(req, res) {
        PrintReceiptFlow_1.default.issueReceipt(req.params.id)
            .then(sale => Response_1.default.sendResponse(res, HttpStatus.OK, sale))
            .catch(error => Response_1.default.sendResponseError(res, error));
    }
}
exports.default = new ConverterController();

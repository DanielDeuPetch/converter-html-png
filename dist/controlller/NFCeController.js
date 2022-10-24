"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const Response_1 = require("../http/Response");
const NFCeServiceHttp_1 = require("../services/http/NFCeServiceHttp");
class NFCeController {
    nfce(req, res) {
        NFCeServiceHttp_1.default.getInvoicePNGBase64(req.params.id)
            .then(sale => Response_1.default.sendResponse(res, HttpStatus.OK, sale))
            .catch(error => Response_1.default.sendResponseError(res, error));
    }
    receipt(req, res) {
        NFCeServiceHttp_1.default.issueReceipt(req)
            .then(sale => Response_1.default.sendResponse(res, HttpStatus.OK, sale))
            .catch(error => Response_1.default.sendResponseError(res, error));
    }
}
exports.default = new NFCeController();

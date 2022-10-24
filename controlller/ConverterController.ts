import * as HttpStatus from 'http-status'
import Response from './Response'
import PrintReceiptFlow from '../flow/receipt/PrintReceiptFlow'

class ConverterController {
  converter(req, res) {
    PrintReceiptFlow.issueReceipt(req.params.id)
      .then(sale => Response.sendResponse(res, HttpStatus.OK, sale))
      .catch(error => Response.sendResponseError(res, error))
  }
}

export default new ConverterController()
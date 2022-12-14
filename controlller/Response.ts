class Helper {
  sendResponse = (res, status, data) => {
    res.status(status).json({ payload: data })
  }

  sendResponseCustom = (res, status, data) => {
    res.status(status).json(data)
  }

  sendResponseError = (res, error) => {
    res.status(error.status).json({ message: error.message, detail: error.detail })
  }
}

export default new Helper()
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import ConverterController from './controlller/ConverterController'

class StartUp {
  public app: express.Application
  private bodyParser

  constructor() {
    this.app = express()
    this.middler()
    this.routes()
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET,OPTIONS,PUT,POST,PATCH",
      origin: "*"
    }
    this.app.use(cors(options))
  }

  middler() {
    this.enableCors()
    this.app.use(bodyParser.json({ limit: '200mb' }))
    this.app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }))
    this.app.use(bodyParser.text({ limit: '200mb' }))
  }

  routes() {
    this.app.route('/').get((_req, res) => {
      res.send({ version: '1.0.0' })
    })
    this.app.route('/api/v1/html-to-png-converter').post(ConverterController.converter)
  }
}

export default new StartUp()
import Server from './server'
import { httpPort } from './Configs'

let port = httpPort || '5000'

Server.app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
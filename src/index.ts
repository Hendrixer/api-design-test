import * as dotenv from 'dotenv' 
dotenv.config()
import config from './config'


import app from './server'

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`server on http://localhost:${port}`)
})
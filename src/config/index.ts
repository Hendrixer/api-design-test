import merge from 'lodash.merge'

const env = process.env.NODE_ENV || 'development'
let envConfig

if (env === 'production') {
  envConfig = require('./prod').default
} else if (env === 'staging') {
  envConfig = require('./staging').default
} else {
  envConfig = require('./local').default
}

const defaultConfig = {
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT,
  logging: false
}

export default merge(defaultConfig, envConfig)

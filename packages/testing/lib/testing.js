'use strict'
const builder = require('./builder.js')

const testing = async () => {
  // move the test folder over to the calling repo
  // TODO
  // run the self test
  return builder.detectQuasar()
}

module.exports = { testing }

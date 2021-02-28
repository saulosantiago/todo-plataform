const sign = require('jsonwebtoken/sign')

module.exports = {
  token: 'any_token',
  sign (id, secret) {
    return this.token
  }
}

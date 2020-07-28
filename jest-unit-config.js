const config = require('./jest.config')
config.testMatch = ['**/*.spec.js', '!**/*.int.spec.js']
module.exports = config

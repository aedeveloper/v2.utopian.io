'use strict'
/** Capabilities (browsers) */
const capabilities = [
	{ browserName: 'selenium' }
]

module.exports = capabilities.map(c => ({ desiredCapabilities: c }))

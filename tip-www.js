'use strict'

const accounting = require('accounting')

const format = (price) =>
	accounting.formatMoney(price, {
		symbol: '€', decimal: ',', thousand: '.', format: '%v%s'
	})

module.exports = {format}

'use strict'

const accounting = require('accounting')



const parse = (str) =>
	accounting.parse(str.trim(), ',')

const format = (price) =>
	accounting.formatMoney(price, {
		symbol: '€', decimal: ',', thousand: '.', format: '%v%s'
	})

module.exports = {parse, format}

// Debug script to see actual currency formatting output
const { getCurrencyFormatting } = require('../src/lib/getCurrencyFormatting.ts');

const { formatCurrency: format } = getCurrencyFormatting({
  defaultCurrency: 'GBP',
  currencySettings: {}
});

const eurResult = format(12345.0, 'EUR');
console.log('EUR result:', JSON.stringify(eurResult));
console.log('EUR chars:', [...eurResult].map(c => `${c}(${c.charCodeAt(0)})`));

const expected = '12.345,00 €';
console.log('Expected:', JSON.stringify(expected));
console.log('Expected chars:', [...expected].map(c => `${c}(${c.charCodeAt(0)})`));

console.log('Are they equal?', eurResult === expected);
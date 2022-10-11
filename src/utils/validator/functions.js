const isDefinedValue = _value => _value !== undefined || _value !== null;
const isString = _str => (typeof _str === 'string' || _str instanceof String)
const isStringNumber = _str => isString(_str) && !isNaN(_str);
const isStringValue = (_str, value) => isString(_str) && _str === value;

function hasStringToken(str, token) {
  const lastIndex = str.length - 1;

  for (let i = 0 ; i <= lastIndex ; i++) {
      const currentToken = str[i];
      if (currentToken === token)
          return true;
  }

  return false;
}

function isStringValidToken(_str, tokens) {
  return tokens.indexOf(_str) >= 0;
}

export {
  isDefinedValue,
  isString,
  isStringNumber,
  isStringValue,
  hasStringToken,
  isStringValidToken
}
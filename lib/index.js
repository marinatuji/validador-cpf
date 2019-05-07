function cpfValidator(cpf) {
  const cpfArray = convertInputToArrayString(cpf);
  const cpfArrayNumber = parseToNumber(cpfArray);
  // isAllTheSame(cpfArrayNumber) ? false : true;
  if (isAllTheSame(cpfArrayNumber)) {
    return false;
  }
  const calcFirstDigit = calcFactorPrimary(cpfArrayNumber);
  if (isEqualToVerifierDigit(calcFirstDigit, cpfArrayNumber[9])) {
    const calcSecondDigit = calcFactorSecondary(cpfArrayNumber);
    return isEqualToVerifierDigit(calcSecondDigit, cpfArrayNumber[10]);
  }
  return false;
}

function convertInputToArrayString(cpf) {
  if (typeof cpf === 'string') {
    return cpf.replace(/\D/g, '').split('');
  } else if (typeof cpf === 'number') {
    return cpf.toString().split('');
  }
  throw new Error(`Tipo de entrada inválida: ${typeof cpf}`);
}

// throw new Error(`Tipo de entrada inválida: ${typeof cpf}`);
// ['1','2',....,'9']
function parseToNumber(newArray) {
  if (newArray.length === 11) {
    return newArray.map(Number);
  }
  throw new Error(`Verifique número de dígitos: Esperado 11 /Encontrado ${newArray.length}`);
}

function isAllTheSame(parseArray) {
  for (value in parseArray) {
    return parseArray[value] !== parseArray[0] ? true : false;
  }
}
//refatorar every

function isEqualToVerifierDigit(result, digit) {
  let verifierDigit = (result * 10) % 11;
  // return verifierDigit === 10 ? verifierDigit = 0 : verifierDigit === digit;
  if (verifierDigit === 10) {
    verifierDigit = 0;
  }
  return verifierDigit === digit;
}

function calcFactorPrimary(array) {
  return array.slice(0, 9).reduce((acc, currentValue, currentIndex) => {
    return acc += currentValue * (10 - currentIndex);
  }, 0);
}

function calcFactorSecondary(array) {
  return array.slice(0, 10).reduce((acc, currentValue, currentIndex) => {
    return acc += currentValue * (11 - currentIndex);
  }, 0);
}

module.exports = cpfValidator;
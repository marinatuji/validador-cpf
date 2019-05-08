function cpfValidator(cpf) {
  const cpfArray = convertInputToArrayString(cpf);
  const cpfArrayNumber = parseToNumber(cpfArray);
  if (isAllTheSame(cpfArrayNumber)) {
    return false;
  }
  const calcFirstDigit = calcPrimaryFactor(cpfArrayNumber);
  if (isEqualToVerifierDigit(calcFirstDigit, cpfArrayNumber[9])) {
    const calcSecondDigit = calcSecondaryFactor(cpfArrayNumber);
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

function parseToNumber(newArray) {
  if (newArray.length === 11) {
    return newArray.map(Number);
  }
  throw new Error(`Verifique número de dígitos: Esperado 11 /Encontrado ${newArray.length}`);
}

function isAllTheSame(parseArray) {
  return parseArray.every(value => value === parseArray[0]);
}

function isEqualToVerifierDigit(resultCalc, digit) {
  let verifierDigit = (resultCalc * 10) % 11;
  verifierDigit = verifierDigit === 10 ? 0 : verifierDigit;
  return verifierDigit === digit;
}

function calcPrimaryFactor(array) {
  return array.slice(0, 9).reduce((acc, currentValue, currentIndex) => {
    return acc += currentValue * (10 - currentIndex);
  }, 0);
}

function calcSecondaryFactor(array) {
  return array.slice(0, 10).reduce((acc, currentValue, currentIndex) => {
    return acc += currentValue * (11 - currentIndex);
  }, 0);
}

module.exports = cpfValidator;
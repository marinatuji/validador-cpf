function cpfValidator(cpf) {
  const cpfArray = convertInputToArrayString(cpf);
  const cpfArrayNumber = parseToArrayInt(cpfArray);
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
//['1','2',....,'9']
function parseToArrayInt(newArray) {
  if (newArray.length === 11) {
    return newArray.map((currentValue) => {
      return parseInt(currentValue);
    });
  }
  throw new Error(`Verifique número de dígitos: Esperado 11 /Encontrado ${newArray.length}`);
}

function isEqualToVerifierDigit(result, digit) {
  let verifierDigit = (result * 10) % 11;
  if (verifierDigit === 10) {
    verifierDigit = 0;
  }
  return verifierDigit === digit;
}

function calcFactorPrimary(array) {
  return array.slice(0, 8).reduce((acc, currentValue, currentIndex) => {
    return acc += currentValue * (10 - currentIndex);
  }, 0);
}

function calcFactorSecondary(array) {
  return array.slice(0, 9).reduce((acc, currentValue, currentIndex) => {
    return acc += currentValue * (11 - currentIndex);
  }, 0);
}

module.exports = cpfValidator;
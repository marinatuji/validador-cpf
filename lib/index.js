function convertInputToArray(cpf) {
  if (typeof cpf === 'string') {
    return cpf.replace(/\.|\-/g, '').split('');
  } else if (typeof cpf === 'number') {
    return cpf.toString().split('');
  }
  throw new Error('Tipo de entrada inválida: ' + typeof cpf);
}
//['1','2',....,'9']
function parseInputToInt(newArray) {
  if (newArray.length === 11) {
    return newArray.map((currentValue) => {
      return parseInt(currentValue);
    });
  }
  throw new Error('Número de digítos inválidos: Esperado 11 /Encontrado ' + newArray.length);
}

function treatArray(array,factor) {
  return array.reduce((acc, currentValue, currentIndex) => {
    return acc += currentValue * (factor - currentIndex);
  }, 0);
}

// function calculator(arrayOk, [1,2]) {
//   index[0]= continha;
//   index[1]=continha;
  // let accFirst = arrayOk.slice(0, 8).reduce((acc, currentValue, currentIndex) => {
  //   return acc += currentValue * (10 - currentIndex);
  // }, 0);
  let accFirst = treatArray(arrayOk.slice(0,8),10);
  let firstDigit = ((accFirst * 10) % 11);
  if (firstDigit === arrayOk[10]) {
    return firstDigit;
  }
  let accSecond = treatArray(arrayOk.slice(0,8).push(firstDigit),11);
  let secondDigit = ((accSecond * 10) % 11);
  if (secondDigit === arrayOk[11]) {
    return secondDigit;
  }
}

function cpfValidator(cpf) {
  const cpfArray = convertInputToArray(cpf);
  parseInputToInt(cpfArray);
}

module.exports.parseInputToInt = parseInputToInt;
module.exports.cpfValidator = cpfValidator;
//module.exports.convertInputToArray = convertInputToArray;
//module.exports.validator = cpfValidator;
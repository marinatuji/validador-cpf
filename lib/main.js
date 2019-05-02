// parseString(cpf) {
//   if (cpf.typeof()) {
//     return false;
//   }
// }

// cpfValidator(numberCPF) {

//   console.log("função do CPF");
// }

function parseArray(cpf) {
  if (typeof cpf != number) {
    let cpfArray = cpf.split('');
  }
  let cpfArray = cpf.split('');
  return cpfArray;
}

function cpfValidator(cpf) {
  if (typeof cpf != "string") {
    return false;
  }
  const a = banana();
}

module.exports = cpfValidator;

function parseArray(cpf) {
  let cpfArray = [];
  if (typeof cpf != number) {
    cpfArray = cpf.split('');
  }
  cpfArray = cpf.split('');
  return cpfArray;
}

function cpfValidator(cpf) {
  parseArray();
  if (typeof cpf != "string") {
    return false;
  }
}

module.exports = cpfValidator;
// module.exports.validator = cpfValidator;
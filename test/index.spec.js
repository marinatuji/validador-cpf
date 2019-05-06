/* eslint-disable */
const expect = require('chai').expect;
const cpfValidator = require('../lib/index');

//representatividade Given/When/Then
describe("cpfValidator", () => {

  describe("Entrada válida do CPF", () => {
    it('Retorna true: CPF válido com máscara ', () => {
      expect(cpfValidator('726.640.430-48')).to.equal(true);
    });
  });

  describe('Entrada válida do CPF', () => {
    it('Retorna true: CPF válido sem máscara', () => {
      expect(cpfValidator(72664043048)).to.equal(true);
    });
  });

  describe("Entrada válida do CPF", () => {
    it("Retorna false: CPF inválido com dígitos iguais", () => {
      expect(cpfValidator(11111111111)).to.equal(false);
    });
  });

  describe('Entrada inválida do CPF', () => {
    it('Retorna erro: Caso de entrada com caracteres não compatíveis', () => {
      expect(cpfValidator('abc.def.ghi-jk')).to.equal(false);
    });
  });

  describe("Entrada inválida do CPF", () => {
    it("Retorna erro: Caso de tamanho diferente de 11", () => {
      expect(cpfValidator(123456789)).to.throw(Error, 'Número de digítos inválidos: Esperado 11 /Encontrado 9');
    });
  });

})
/* eslint-disable */
const expect = require('chai').expect;
const cpfValidator = require("../lib");

//TDD (Given/When/Then) 
describe("cpfValidator", () => {
  describe("Quando a entrada do CPF for válida", () => {
    it("Retorna false: para digítos iguais do CPF", () => {
      expect(cpfValidator(11111111111)).to.equal(false);
      // expect(cpfValidator([1,2,3,4,5,6]).to.be.equal(false));
    });
  });

  describe("Quando a entrada do CPF for inválida", () => {
    it("Retorna false: para tamanho diferente de 11", () => {
      expect(cpfValidator(123456789)).to.throw(Error, 'Número de digítos inválidos: Esperado 11 /Encontrado 9');
    });
  });

  describe('Quando a entrada tiver mascara', () => {
    it('deve retornar true', () => {
      expect(cpfValidator('12345678978')).to.equal([1, 2, 3, 4]);
    });
  });

})
/* eslint-disable */
const expect = require('chai').expect;
const cpfValidator = require("../lib");

//TDD (Given/When/Then)
describe("cpfValidator", () => {
  describe("Quando a entrada do cpf for inválida", () => {
    it("deve retornar false", () => {
      expect(cpfValidator(11111111111)).to.be.equal(false);
      // expect(cpfValidator([1,2,3,4,5,6]).to.be.equal(false));
    });
  });

  // describe("Quando o tamanho da entrada do CPF for menor que 11", () => {
  //   it("deve retornar false", () => {
  //     expect(cpfValidator(22222222)).to.be.equal(false);
  //   });
  // });

  describe("Quando a entrada do cpf for válida", () => {
    describe("e todos os números são iguais", () => {
      it("deve retornar false", () => {
        expect(cpfValidator("11111111111")).to.be.equal(false);
      });
    });
  });
})

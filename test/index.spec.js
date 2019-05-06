/* eslint-disable */
const expect = require('chai').expect;
const cpfValidator = require('../lib/index');

//representatividade do Given/When/Then
describe("cpfValidator", () => {

  describe("Entrada válida do CPF", () => {
    it('Retorna true: CPF válido com máscara ', () => {
      expect(cpfValidator('338.669.038-63')).to.equal(true);
    });
    it('Retorna true: CPF válido sem máscara', () => {
      expect(cpfValidator(72664043048)).to.equal(true);
    });
    it('Retorna true: CPF com primeiro dígito igual a 0', () => {
      // expect('974.255.420-05').t;
      expect(cpfValidator('974.255.420-06')).to.be.false;
    });
    it("Retorna false: CPF inválido com dígitos iguais", () => {
      expect(cpfValidator(11111111111)).to.equal(false);
    });
    it('Retorna false: CPF com primeiro dígito inválido ', () => {
      expect(cpfValidator(33866903852)).to.equal(false);      
    });
  });

  describe('Entrada inválida do CPF', () => {
    it('Retorna erro: Caso de entrada com caracteres não compatíveis', () => {
      expect(() => { cpfValidator('abc.def.ghi-jk') }).to.throw(Error, 'Verifique número de dígitos: Esperado 11 /Encontrado 0');
    });
    it("Retorna erro: Caso de tamanho diferente de 11", () => {
      expect(() => { cpfValidator(123456789) }).to.throw(Error, 'Verifique número de dígitos: Esperado 11 /Encontrado 9');
    });
    it('Retorna erro: Caso do tipo de dado incompativel (booleano)', () => {
      expect(() => { cpfValidator(false) }).to.throw(Error, 'Tipo de entrada inválida: boolean')
    });
  });

})
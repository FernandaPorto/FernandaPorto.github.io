/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { truncate } = require('fs');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array. Referêcia utilizada: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    assert.deepStrictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const product = productDetails();
    const arrayOfObjects = [typeof product[0], typeof product[1]];
    assert.deepStrictEqual(arrayOfObjects, ['object', 'object']);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('A', 'B')[0], productDetails('A', 'B')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const product1 = product[0].details.productId;
    const product2 = product[1].details.productId;
    const search = [product1.slice(-3), product2.slice(-3)];
    assert.deepStrictEqual(search, ['123', '123']);
    // Resolvi essa última com ajuda da galera do sabadão!
  });
});

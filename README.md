#Validador de CPF v.1.0.0 (Projeto com objetivo pedagógico)

Esta biblioteca se destina à verificação da validade de CPF (Cadastro de Pessoa Física), para uso em aplicações web. Nessa versão é possível validar quaisquer números de CPF.

##Como instalar:


##Como utilizar:


##Roadmap Oficial do Projeto

Versão 1.1.0 (Maio/2019)

  *funcionalidades: validação de CPF;
  *normalização entrada de dados: para números de CPF com e sem máscara. 

Versão 1.0.0 (Released)

  *estrutura inicial do projeto, utilizando a prática de desenvolvimento TDD (Test Driven Development), sem funcionalidades implementadas.


##Conceitos

O CPF é formado por 11 dígitos numéricos que seguem a máscara "###.###.###-##" a verificação do CPF acontece utilizando os 9 primeiros dígitos e, com um cálculo simples, verificando se o resultado corresponde aos dois últimos dígitos (depois do sinal "-").

O cálculo do CPF (Cadastro de Pessoa Física) é especificado pelo Ministério da Fazenda

###Validação do primeiro dígito

Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados. Exemplo de um CPF fictício "529.982.247-25". Assim:

  >5 * 10 + 2 * 9 + 9 * 8 + 9 * 7 + 8 * 6 + 2 * 5 + 2 * 4 + 4 * 3 + 7 * 2

O resultado do nosso exemplo é: 295

O próximo passo da verificação também é simples, basta multiplicarmos esse resultado por 10 e dividirmos por 11.

  295 * 10 / 11

O resultado que nos interessa na verdade é o RESTO da divisão. Se ele for igual ao primeiro
dígito verificador (primeiro dígito depois do '-'), a primeira parte da validação está correta

Observação Importante: Se o resto da divisão for igual a 10, nós o consideramos como 0.

Vamos conferir o primeiro dígito verificador do nosso exemplo:
  O resultado da divisão acima é '268' e o RESTO é 2

Isso significa que o nosso CPF exemplo passou na validação do primeiro dígito.

###Validação do segundo dígito

A validação do segundo dígito é semelhante à primeira, porém vamos considerar os 9 primeiros
dígitos, mais o primeiro dígito verificador, e vamos multiplicar esses 10 números pela sequencia
decrescente de 11 a 2. Vejamos:

  5 * 11 + 2 * 10 + 9 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 2 * 5 + 4 * 4 + 7 * 3 + 2 * 2

O resultado é: 347

Seguindo o mesmo processo da primeira verificação, multiplicamos por 10 e dividimos por 11.

347 * 10 / 11

Verificando o RESTO, como fizemos anteriormente, temos:

  O resultado da divisão é '315' e o RESTO é 5

Verificamos, se o resto corresponde ao segundo dígito verificador.
Com essa verificação, constatamos que o CPF 529.982.247-25 é válido.

[Fonte](https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/)
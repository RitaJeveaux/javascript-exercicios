// -----------------------------------
//          I. Variáveis
// -----------------------------------

function calcula_produto(num1, num2) {
  return num1 * num2;
}

function multiplicar() {
  const num1 = parseFloat(document.getElementById('num1-1').value);
  const num2 = parseFloat(document.getElementById('num2-1').value);
  const resultadoDiv = document.getElementById('resultado-1');

  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    const resultado = calcula_produto(num1, num2);
    resultadoDiv.textContent = `Resultado: ${resultado}`;
  } else {
    resultadoDiv.textContent = 'Digite dois números inteiros válidos.';
  }
  document.getElementById('num1-1').value = '';
  document.getElementById('num2-1').value = '';
}

//  -------------------------------------------------------//   

function calcula_media(...notas) {
  if (notas.length === 0) return 0;
  const soma = notas.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  const media = soma / notas.length;
  return media.toFixed(2);
}

function mediaAritmetica() {
  const nota1 = parseFloat(document.getElementById('nota1-2').value);
  const nota2 = parseFloat(document.getElementById('nota2-2').value);
  const nota3 = parseFloat(document.getElementById('nota3-2').value);
  const nota4 = parseFloat(document.getElementById('nota4-2').value);
  const notas = [nota1, nota2, nota3, nota4];
  const resultadoDiv = document.getElementById('resultado-2');
  const saoValidas = notas.every(nota => !isNaN(nota) && nota >= 0 && nota <= 10);

  if (saoValidas) {
    const media = calcula_media(...notas);
    resultadoDiv.textContent = `A média aritmética é: ${media}`;
  } else {
    resultadoDiv.textContent = 'Digite 4 notas válidas entre 0 e 10.';
  }
  document.getElementById('nota1-2').value = '';
  document.getElementById('nota2-2').value = '';
  document.getElementById('nota3-2').value = '';
  document.getElementById('nota4-2').value = '';
}

//  -------------------------------------------------------//   

function aplica_desconto(preco, descontoPercentual) {
  const valorDesconto = calcula_produto(preco, (descontoPercentual / 100));
  const precoFinal = preco - valorDesconto;
  return precoFinal;
}

function desconto() {
  const preco = parseFloat(document.getElementById('preco-3').value);
  const resultadoDiv = document.getElementById('resultado-3');

  if (!isNaN(preco) && preco > 0) {
    const precoFinal = aplica_desconto(preco, 25).toFixed(2);
    resultadoDiv.textContent = `O preço com desconto é: R$ ${precoFinal}`;
  } else {
    resultadoDiv.textContent = `Digite um preço válido.`
  }
  document.getElementById('preco-3').value = '';
}

//  -------------------------------------------------------//  

function calcula_area_perimetro(comprimento, largura) {
  const area = calcula_produto(comprimento, largura);
  const perimetro = calcula_produto(2, (comprimento + largura));
  return {
    area: area,
    perimetro: perimetro
  };
}

function areaPerimetro() {
  const comprimento = parseFloat(document.getElementById('comprimento-4').value);
  const largura = parseFloat(document.getElementById('largura-4').value);
  const resultadoDiv = document.getElementById('resultado-4');

  if (!isNaN(comprimento) && !isNaN(largura) && comprimento > 0 && largura > 0) {
    const { area, perimetro } = calcula_area_perimetro(comprimento, largura);
    resultadoDiv.textContent = `Área: ${area.toFixed(2)} m² | Perímetro: ${perimetro.toFixed(2)} m`;
  } else {
    resultadoDiv.textContent = 'Digite valores positivos e válidos para comprimento e largura.';
  }
  document.getElementById('comprimento-4').value = '';
  document.getElementById('largura-4').value = '';
}

//  -------------------------------------------------------//  


function calcula_azulejo(comprimento, largura) {
  const areaPorCaixaDeAzulejo = 2.5;
  const { area } = calcula_area_perimetro(comprimento, largura);
  const qtdCaixas = area / areaPorCaixaDeAzulejo;
  return Math.ceil(qtdCaixas);
}

function azulejos() {
  const comprimento = parseFloat(document.getElementById('comprimento-5').value);
  const largura = parseFloat(document.getElementById('largura-5').value);
  const resultadoDiv = document.getElementById('resultado-5');

  if (!isNaN(comprimento) && !isNaN(largura) && comprimento > 0 && largura > 0) {
    const caixas = calcula_azulejo(comprimento, largura);
    resultadoDiv.textContent = `Serão necessárias ${caixas} caixas de azulejos.`;
  } else {
    resultadoDiv.textContent = `Digite valores positivos e válidos para comprimento e largura.`;
  }
  document.getElementById('comprimento-5').value = '';
  document.getElementById('largura-5').value = '';
}

//  -------------------------------------------------------//  

function calcula_area_circulo(raio) {
  const pi = Math.PI;
  const area = calcula_produto(pi, Math.pow(raio, 2));
  return area.toFixed(2);
}

function areaCirculo() {
  const raio = parseFloat(document.getElementById('raio-6').value);
  const resultadoDiv = document.getElementById('resultado-6');

  if (raio && raio > 0) {
    const area = calcula_area_circulo(raio);
    resultadoDiv.textContent = `A área de um círculo com ${raio} de raio é ${area}.`;
  } else {
    document.getElementById('resultado-6').textContent = `Digite um valor válido para o raio.`;
  }

}

// -----------------------------------
//         II. Funções
// -----------------------------------


function calcula_media_produto(num1, num2) {
  const produto = calcula_produto(num1, num2);
  const media = calcula_media(num1, num2);
  return {
    produto: produto,
    media: parseFloat(media),
  };
}

function mediaProduto() {
  const num1 = parseFloat(document.getElementById('num1-f1').value);
  const num2 = parseFloat(document.getElementById('num2-f1').value);
  const resultadoDiv = document.getElementById('resultado-f1');
  if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0) {
    const { media, produto } = calcula_media_produto(num1, num2);
    resultadoDiv.textContent = `Para os números ${num1} e ${num2} a Media é ${media} e o Produto é ${produto}.`
  } else {
    resultadoDiv.textContent = 'Digite dois números inteiros válidos.';
  }
  document.getElementById('num1-f1').value = '';
  document.getElementById('num2-f1').value = '';

}

//  -------------------------------------------------------//  

function calcula_media_ponderada(objAluno) {
  const { nota1, nota2, peso1, peso2 } = objAluno;
  const result1 = calcula_produto(nota1, peso1);
  const result2 = calcula_produto(nota2, peso2);
  const somaPesos = peso1 + peso2;
  const resultado = ((result1 + result2) / somaPesos).toFixed(2);
  return resultado;
};

function mediaPonderada() {
  const peso1 = parseFloat(document.getElementById('peso1-f2').value);
  const peso2 = parseFloat(document.getElementById('peso2-f2').value);
  const matricula = parseInt(document.getElementById('matricula-f2').value);
  const nota1 = parseFloat(document.getElementById('nota1-f2').value);
  const nota2 = parseFloat(document.getElementById('nota2-f2').value);
  const resultadoDiv = document.getElementById('resultado-f2');
  const objAluno = {
    peso1: peso1,
    peso2: peso2,
    matricula: matricula,
    nota1: nota1,
    nota2: nota2,
  };

  const saoValidos = !isNaN(peso1) && peso1 > 0 &&
    !isNaN(peso2) && peso2 > 0 &&
    !isNaN(matricula) &&
    !isNaN(nota1) && nota1 >= 0 && nota1 <= 10 &&
    !isNaN(nota2) && nota2 >= 0 && nota2 <= 10;

  if (saoValidos) {
    const resultado = calcula_media_ponderada(objAluno);
    resultadoDiv.textContent = `O aluno de matrícula: ${matricula} alcançou média ${resultado}.`;
  } else {
    resultadoDiv.textContent = 'Digite valores válidos para todos os campos.';
  }
  document.getElementById('peso1-f2').value = '';
  document.getElementById('peso2-f2').value = '';
  document.getElementById('matricula-f2').value = '';
  document.getElementById('nota1-f2').value = '';
  document.getElementById('nota2-f2').value = '';
}

//  -------------------------------------------------------// 

// NAO IMPLEMTADO NO HTML
// Exercício 3: Média Ponderada com a função `calcula_produto()`
// Altere o programa do exercício 2 para que ele utilize a função `calcula_produto` do exercício 1 no cálculo da média ponderada.
// Formulário similar ao Exercício 2 acima, com a lógica de cálculo alterada no Javascript.
// Resposta no exercicio anterior.

//  -------------------------------------------------------// 

// NAO IMPLEMTADO NO HTML
// Exercício 4: Média Ponderada para 2 Alunos
// Altere o programa do exercício 3 para que ele processe os dados de 2 alunos ao invés de apenas 1.
// Formulários para dois alunos.

function calcula_medias_ponderadas(...alunos) {
  alunos.forEach(aluno => {
    console.log(calcula_media_ponderada(aluno));
  });
}

// -----------------------------------
//       III. Condicionais
// -----------------------------------

function atribui_conceito(nota1, nota2) {
  const media = calcula_media(nota1, nota2);
  let msg = '';
  if (media == 10) {
    msg = `Aluno Aprovado com Distinção.`;
  } else if (media >= 7) {
    msg = `Aluno Aprovado`;
  } else {
    msg = `Aluno Reprovado`;
  }
  return msg;
}

function verificarAprovacao() {
  const nota1 = parseFloat(document.getElementById('nota1-c1').value);
  const nota2 = parseFloat(document.getElementById('nota2-c1').value);
  const resultadoDiv = document.getElementById('resultado-c1');
  const saoValidas = !isNaN(nota1) && nota1 >= 0 && nota1 <= 10 && !isNaN(nota2) && nota2 >= 0 && nota2 <= 10;

  if (saoValidas) {
    const resultado = atribui_conceito(nota1, nota2);
    resultadoDiv.textContent = `${resultado}`;
  } else {
    resultadoDiv.textContent = `Digite valores válidos para as notas.`;
  };
  document.getElementById('nota1-c1').value = '';
  document.getElementById('nota2-c1').value = '';
}


//  -------------------------------------------------------// 


function aplicar_reajuste(salario, percentual) {
  const novoSalario = salario * (1 + percentual / 100);
  return novoSalario.toFixed(2);
}

function formata_saida(salarioOriginal, percentual, valorAumento, salarioNovo) {
  return `Salário base: R$ ${salarioOriginal} | Percentual de aumento: ${percentual}%<br>
          Valor do aumento: R$ ${valorAumento} | Salário novo: R$ ${salarioNovo}<br>`;
}

function reajusta_salario(salario) {
  const salarioOriginal = salario.toFixed(2);
  let percentual = 0;
  let valorAumento = 0;
  let salarioNovo = 0;

  if (salarioOriginal <= 280) percentual = 20;
  else if (salarioOriginal < 700) percentual = 15;
  else if (salarioOriginal < 1500) percentual = 10;
  else percentual = 5;

  salarioNovo = aplicar_reajuste(salarioOriginal, percentual);
  valorAumento = (salarioNovo - salarioOriginal).toFixed(2);
  return [salarioOriginal, percentual, valorAumento, salarioNovo];
};

function reajusteSalarial() {
  const salario = parseFloat(document.getElementById('salario-c2').value);
  const resultadoDiv = document.getElementById('resultado-c2');
  if (!isNaN(salario) && salario > 0) {
    const resultado = reajusta_salario(salario);
    resultadoDiv.innerHTML = formata_saida(resultado[0], resultado[1], resultado[2], resultado[3]);
    console.log(resultadoDiv.innerHTML);
  } else {
    resultadoDiv.textContent = `Digite um valor válido para o salário.`;
  }
  document.getElementById('salario-c2').value = '';
}


// -----------------------------------
//    IV. Estruturas de Repetição
// -----------------------------------


function limparCamposValidacao() {
  document.getElementById('nome-r1').value = '';
  document.getElementById('idade-r1').value = '';
  document.getElementById('salario-r1').value = '';
  document.getElementById('estadoCivil-r1').value = '';
}

function valida_info(nome, idade, salario, estadoCivil) {
  const erros = [];
  if (nome.length <= 3) {
    erros.push("Nome deve ter mais de 3 caracteres.");
  }
  if (isNaN(idade) || idade < 0 || idade > 150) {
    erros.push("Idade deve estar entre 0 e 150.");
  }
  if (isNaN(salario) || salario <= 0) {
    erros.push("Salário deve ser um número maior que zero.");
  }
  const estadosValidos = ['s', 'c', 'v', 'd'];
  if (!estadoCivil || !estadosValidos.includes(estadoCivil.toLowerCase())) {
    erros.push("Estado Civil inválido. Digite 's', 'c', 'v' ou 'd'.");
  }
  if (erros.length > 0) {
    limparCamposValidacao();
    return erros.join('<br>');
  }
  return `Informações validadas com sucesso.`;
}

function validarInformacoes() {
  const nome = document.getElementById('nome-r1').value;
  const idade = parseInt(document.getElementById('idade-r1').value, 10);
  const salario = parseFloat(document.getElementById('salario-r1').value);
  const estadoCivil = document.getElementById('estadoCivil-r1').value;
  const resultadoDiv = document.getElementById('resultado-r1');
  const resultado = valida_info(nome, idade, salario, estadoCivil);
  resultadoDiv.innerHTML = resultado;
}


//  -------------------------------------------------------// 

function descobre_o_maior(...numeros) {
  const ehMaior = Math.max(...numeros);
  return `O maior número é: ${ehMaior}`;
}

function encontrarMaiorNumero() {
  const numerosInput = document.getElementById('numeros-r2').value;
  const resultadoDiv = document.getElementById('resultado-r2');
  const numerosArray = numerosInput.split(',')
    .map(numStr => parseFloat(numStr.trim()))
    .filter(num => !isNaN(num));

  if (numerosArray.length < 5) {
    resultadoDiv.textContent = 'Digite pelo menos 5 números válidos. Separe os números por vírgula.';
    document.getElementById('numeros-r2').value = '';
    return;
  }
  const resultado = descobre_o_maior(...numerosArray);
  resultadoDiv.textContent = resultado;
  document.getElementById('numeros-r2').value = '';
}

const respostasCorretas = {
  q1: 'Paris',
  q2: 'Brasília',
  q3: 'Berlim',
  q4: 'Tóquio',
  q5: 'Canberra',
};

document
  .getElementById('quizForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let pontuacao = 0;
    const formData = new FormData(event.target);

    for (let [pergunta, resposta] of formData.entries()) {
      if (resposta === respostasCorretas[pergunta]) {
        pontuacao++;
      }
    }

    document.getElementById('resultado').innerHTML = `
  <h4>Você acertou ${pontuacao} de 5 perguntas!</h4>
`;
  });

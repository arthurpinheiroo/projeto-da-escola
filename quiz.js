   const quizData = [
        {
            question: "O que é compostagem e como ela ajuda o meio ambiente?",
            a: "Um método de reciclagem de resíduos eletrônicos",
            b: "Um processo de decomposição de resíduos orgânicos que se transforma em adubo natural",
            c: "Uma técnica de cultivo de plantas geneticamente modificadas",
            d: "Um tipo de plástico biodegradável",
            correct: "B"
        },
        {
            question: "Qual das seguintes ações é a mais eficiente para reduzir o desperdício de água em casa?",
            a: "Lavar o carro todos os dias",
            b: "Usar a máquina de lavar roupas com carga completa e apenas 1 vez na semana",
            c: "Manter a torneira aberta enquanto escova os dentes",
            d: "Deixar o chuveiro ligado enquanto se ensaboa",
            correct: "B"
        },
        {
            question: "Qual é a melhor forma de reduzir a poluição plástica nos oceanos?",
            a: "Jogar plásticos biodegradáveis no mar",
            b: "Reduzir o uso de plásticos descartáveis e reciclar mais",
            c: "Comprar mais produtos de plástico reciclável",
            d: "Jogar plásticos em aterros sanitários",
            correct: "B"
        },
        {
            question: "Qual é a importância de plantar árvores para o meio ambiente?",
            a: "Elas bloqueiam o vento, tornando as áreas mais calmas",
            b: "Árvores ajudam a absorver dióxido de carbono e produzem oxigênio",
            c: "Elas servem apenas como fonte de madeira e papel",
            d: "Elas ajudam na decoração urbana",
            correct: "B"
        },
        {
            question: "Qual das seguintes práticas é considerada uma agricultura sustentável?",
            a: "Uso de pesticidas químicos em larga escala",
            b: "Agricultura de monocultura",
            c: "Agricultura orgânica e rotatividade de culturas",
            d: "Agricultura de desmatamento",
            correct: "C"
        },
        {
            question: "Como o uso de transporte público pode ajudar o meio ambiente?",
            a: "Reduzindo a quantidade de carros nas ruas e diminuindo a poluição do ar",
            b: "Aumentando o tráfego e o tempo de viagem",
            c: "Aumentando a demanda por combustíveis fósseis",
            d: "Reduzindo a quantidade de bicicletas nas ruas",
            correct: "A"
        },
        {
            question: "O que significa “reduzir, reutilizar e reciclar”?",
            a: "Usar mais recursos naturais",
            b: "Reduzir o uso de recursos, reutilizar materiais e reciclar resíduos",
            c: "Comprar mais produtos plásticos",
            d: "Jogar todos os resíduos no lixo comum",
            correct: "B"
        },
        {
            question: "Por que as queimadas florestais são prejudiciais ao meio ambiente?",
            a: "Porque limpam o solo para a construção",
            b: "Porque destroem habitats, liberam CO2 e afetam a qualidade do ar",
            c: "Porque deixam o solo mais fértil",
            d: "Porque ajudam na geração de energia elétrica",
            correct: "B"
        },
        {
            question: "Qual é a melhor maneira de apoiar a biodiversidade local em áreas urbanas?",
            a: "Plantar apenas plantas exóticas",
            b: "Cultivar plantas nativas e criar habitats para polinizadores",
            c: "Usar pesticidas para controlar todos os insetos",
            d: "Remover todas as árvores da área urbana",
            correct: "B"
        },
        {
            question: "Como as energias renováveis podem ajudar a combater a mudança climática?",
            a: "Usando combustíveis fósseis para gerar energia",
            b: "Substituindo combustíveis fósseis por fontes limpas como solar e eólica",
            c: "Construindo mais usinas nucleares",
            d: "Aumentando o consumo de eletricidade em horários de pico",
            correct: "B"
        },
        // Novas perguntas
        {
            question: "Qual é o principal gás de efeito estufa responsável pelo aquecimento global?",
            a: "Oxigênio",
            b: "Metano",
            c: "Dióxido de carbono",
            d: "Nitrato",
            correct: "C"
        },
        {
            question: "Qual prática ajuda a conservar a energia elétrica em uma residência?",
            a: "Manter as luzes acesas o dia todo",
            b: "Usar lâmpadas LED e apagar luzes desnecessárias",
            c: "Usar aquecedores elétricos durante o verão",
            d: "Deixar os aparelhos eletrônicos em modo standby",
            correct: "B"
        },
        {
            question: "Qual é uma das consequências do desmatamento para a biodiversidade?",
            a: "Aumento na qualidade do solo",
            b: "Perda de habitat para muitas espécies",
            c: "Aumento da quantidade de água disponível",
            d: "Menor emissão de poluentes",
            correct: "B"
        },
        {
            question: "Como o transporte individual afeta a qualidade do ar?",
            a: "Reduzindo a emissão de gases poluentes",
            b: "Aumentando a emissão de gases poluentes e partículas",
            c: "Melhorando a qualidade do ar",
            d: "Não afeta a qualidade do ar",
            correct: "B"
        },
        {
            question: "Qual é um dos principais impactos das mudanças climáticas nos oceanos?",
            a: "Redução do nível do mar",
            b: "Aumento da temperatura da água e acidificação",
            c: "Aumento da quantidade de peixes",
            d: "Redução da salinidade da água",
            correct: "B"
        },
        {
            question: "Qual é um método eficaz para economizar água no jardim?",
            a: "Regar as plantas em horários mais quentes do dia",
            b: "Usar um sistema de irrigação eficiente e plantas nativas",
            c: "Deixar as mangueiras abertas o tempo todo",
            d: "Regar as plantas todos os dias, sem exceção",
            correct: "B"
        },
        {
            question: "Qual é a principal vantagem da utilização de energia solar?",
            a: "Reduz o custo do combustível fóssil",
            b: "Gera energia sem emissões de gases de efeito estufa",
            c: "Aumenta a dependência de combustíveis fósseis",
            d: "Diminui a eficiência energética",
            correct: "B"
        },
        {
            question: "Qual é um dos benefícios da agricultura orgânica em relação à agricultura convencional?",
            a: "Uso intensivo de pesticidas químicos",
            b: "Redução do impacto ambiental e preservação do solo",
            c: "Uso de fertilizantes químicos em larga escala",
            d: "Maior emissão de gases de efeito estufa",
            correct: "B"
        },
        {
            question: "Qual é a principal causa da acidificação dos oceanos?",
            a: "Aumento da temperatura global",
            b: "Redução da poluição atmosférica",
            c: "Aumento da absorção de dióxido de carbono pelos oceanos",
            d: "Diminuição dos níveis de CO2 atmosférico",
            correct: "C"
        },
        {
            question: "Como o conceito de economia circular pode beneficiar o meio ambiente?",
            a: "Ao aumentar a produção de resíduos",
            b: "Ao promover a reutilização e reciclagem de recursos",
            c: "Ao usar mais recursos naturais",
            d: "Ao descartar produtos sem valor",
            correct: "B"
        },
        {
            question: "O que é uma pegada de carbono?",
            a: "A quantidade de água usada diariamente",
            b: "A quantidade de resíduos gerados por uma pessoa",
            c: "A quantidade de gases de efeito estufa emitidos por uma pessoa ou atividade",
            d: "A quantidade de energia elétrica consumida em um mês",
            correct: "C"
        },
        {
            question: "Qual é uma das maneiras de reduzir o consumo de plásticos descartáveis?",
            a: "Utilizar sacolas plásticas para todas as compras",
            b: "Usar garrafas e recipientes reutilizáveis",
            c: "Comprar mais produtos embalados em plástico",
            d: "Descartar plásticos recicláveis no lixo comum",
            correct: "B"
        },
        {
            question: "Como a preservação dos ecossistemas pode ajudar a prevenir desastres naturais?",
            a: "Reduzindo a diversidade biológica",
            b: "Aumentando a resistência dos ecossistemas e absorção de água",
            c: "Desmatando áreas de floresta",
            d: "Aumentando a urbanização das áreas naturais",
            correct: "B"
        },
        {
            question: "O que é um ecossistema?",
            a: "Um lugar com apenas plantas",
            b: "A interação entre organismos vivos e seu ambiente",
            c: "Um tipo de solo específico",
            d: "Um grupo de animais que vivem juntos",
            correct: "B"
        }
    
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerBtn = document.getElementById('answerBtn');
const resultBox = document.querySelector('.result_box');
const finalScoreEl = document.getElementById('finalScore');
const totalQuestionsEl = document.getElementById('totalQuestions');
const questionsRemainingEl = document.getElementById('questionsRemaining');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    resetAnswerStyles(); // Resetar estilos das respostas
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    document.getElementById('A').innerText = currentQuizData.a;
    document.getElementById('B').innerText = currentQuizData.b;
    document.getElementById('C').innerText = currentQuizData.c;
    document.getElementById('D').innerText = currentQuizData.d;
    questionsRemainingEl.textContent = quizData.length - (currentQuiz + 1); // Atualiza as perguntas restantes
    answerBtn.classList.remove('hide'); // Mostra o botão de responder
}

function deselectAnswers() {
    const answerOptions = document.querySelectorAll('.answer-options li');
    answerOptions.forEach(option => {
        option.classList.remove('selected');
    });
}

function selectAnswer(selectedOption) {
    deselectAnswers(); // Remove a seleção de todas as opções
    selectedOption.classList.add('selected'); // Adiciona a seleção à opção clicada
}

function resetAnswerStyles() {
    const answerOptions = document.querySelectorAll('.answer-options li');
    answerOptions.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('.answer-options li.selected');
    if (selectedOption) {
        const answer = selectedOption.id;
        const correctAnswer = quizData[currentQuiz].correct;

        // Marca a resposta correta e a resposta errada
        const correctOption = document.getElementById(correctAnswer);

        if (answer === correctAnswer) {
            score += 1;
            selectedOption.classList.add('correct'); // Marca a resposta certa
        } else {
            selectedOption.classList.add('incorrect'); // Marca a resposta errada
            correctOption.classList.add('correct'); // Marca a resposta certa
        }

        // Espera 1 segundo para mostrar os estilos antes de passar para a próxima pergunta
        setTimeout(() => {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                showResults();
            }
            updateScore();
        }, 1000); // Tempo em milissegundos para mostrar a correção
    } else {
        alert("Por favor, selecione uma resposta.");
    }
}

function updateScore() {
    finalScoreEl.textContent = score;
    totalQuestionsEl.textContent = quizData.length;
}

function showResults() {
    document.querySelector('.quiz-container').classList.add('hide'); // Oculta o container do quiz
    resultBox.classList.remove('hide'); // Mostra a caixa de resultados
}

// Adiciona event listener para as opções de resposta
document.querySelectorAll('.answer-options li').forEach(option => {
    option.addEventListener('click', () => selectAnswer(option));
});

// Adiciona event listener para o botão de responder
answerBtn.addEventListener('click', checkAnswer);

// Adiciona event listener para o botão de reiniciar
document.getElementById('restartBtn').addEventListener('click', () => {
    score = 0;
    currentQuiz = 0;
    document.querySelector('.quiz-container').classList.remove('hide');
    resultBox.classList.add('hide');
    loadQuiz();
    updateScore();
});

// Adiciona event listener para o botão de sair
document.getElementById('exitBtn').addEventListener('click', () => {
    window.location.href = 'pagina-quiz.html'; // Redireciona para a página inicial do quiz
});

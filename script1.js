const questions = [
    {
        question: "What is your regular diet?",
        options: [{ text: "Vegetarian", value: 2.5 }, { text: "Non Vegetarian", value: 4 }]
    },
    {
        question: "What is your regular mode of transport?",
        options: [
            { text: "Public transport", value: 1.47 },
            { text: "Electric vehicle", value: 2.95 },
            { text: "Fuel powered vehicle", value: 3.02 },
            { text: "Two-wheeler", value: 1.02 }
        ]
    },
    {
        question: "Where do you usually procure your groceries?",
        options: [
            { text: "Supermarket chains", value: 1.2 },
            { text: "Online", value: 0.9 },
            { text: "Local farmer’s market", value: 0.15 }
        ]
    },
    {
        question: "What is the energy source of your home?",
        options: [{ text: "Solar powered", value: -6.67 }, { text: "Power plants", value: 6.67 }]
    },
    {
        question: "How do you dispose of your organic waste?",
        options: [{ text: "Compost", value: -0.1 }, { text: "Dust bin", value: 0.1 }]
    },
    {
        question: "Do you have a terrace or balcony garden?",
        options: [{ text: "Yes", value: -2.5 }, { text: "No", value: 2.5 }]
    },
    {
        question: "What is your laundry choice?",
        options: [{ text: "Washer + Dryer", value: 3.28 }, { text: "Washer + Sun dry", value: 0.82 }]
    },
    {
        question: "What is your residential type?",
        options: [
            { text: "Apartment", value: 10.25 },
            { text: "Independent house", value: 17.42 },
            { text: "Villa", value: 21.52 }
        ]
    },
    {
        question: "What is the number of high energy devices frequently used?",
        options: [
            { text: "AC - 0, Water heater - 2", value: 13.12 },
            { text: "AC - 1, Water heater - 2", value: 22.96 },
            { text: "AC - 2, Water heater - 2", value: 32.8 },
            { text: "AC - 3, Water heater - 3", value: 6.56 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalCO2 = 0;

function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const question = questions[currentQuestionIndex];
    quizContainer.innerHTML += `<div class="question">${question.question}</div>`;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.onclick = () => selectOption(option.value);
        quizContainer.appendChild(button);
    });
}

function selectOption(value) {
    totalCO2 += value;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `Your estimated carbon footprint is ${totalCO2.toFixed(2)} kg CO2/day.`;
}

document.getElementById('nextBtn').onclick = showQuestion;

// Start the quiz
showQuestion();

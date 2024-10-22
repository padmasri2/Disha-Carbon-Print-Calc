const questions = [
    {
        question: "What is your regular diet?",
        options: [
            { text: "Vegetarian", value: 2.5, image: "images/veg.jpeg" },
            { text: "Non Vegetarian", value: 4, image: "images/nonveg.jpg" } 
        ]
    },
    {
        question: "What is your regular mode of transport?",
        options: [
            { text: "Public transport", value: 1.47, image: "images/publictransport.jpeg" },
            { text: "Electric vehicle", value: 2.95, image: "images/electricvehicle.jpeg" },
            { text: "Fuel powered vehicle", value: 3.02, image: "images/fuel.jpeg" },
            { text: "Two-wheeler", value: 1.02, image: "images/twowheeler.jpeg" }
        ]
    },
    {
        question: "Where do you usually procure your groceries?",
        options: [
            { text: "Supermarket chains", value: 1.2, image: "images/3supermarket.jpeg" },
            { text: "Online", value: 0.9, image: "images/3online.jpeg" },
            { text: "Local farmer’s market", value: 0.15, image: "images/farmersmarket.jpeg" }
        ]
    },
    {
        question: "What is the energy source of your home?",
        options: [
            { text: "Solar powered", value: -6.67, image: "images/4solar.jpeg" },
            { text: "Power plants", value: 6.67, image: "images/4powerplant.jpeg" }
        ]
    },
    {
        question: "How do you dispose of your organic waste?",
        options: [
            { text: "Compost", value: -0.1, image: "images/5compost.jpeg" },
            { text: "Dust bin", value: 0.1, image: "images/dustbin.jpg" }
        ]
    },
    {
        question: "Do you have a terrace or balcony garden?",
        options: [
            { text: "Yes", value: -2.5, image: "images/6yesgarden.jpeg" },
            { text: "No", value: 2.5, image: "images/6nogarden.jpeg" }
        ]
    },
    {
        question: "What is your laundry choice?",
        options: [
            { text: "Washer + Dryer", value: 3.28, image: "images/7dryer.jpeg" },
            { text: "Washer + Sun dry", value: 0.82, image: "images/7sundry.jpeg" }
        ]
    },
    {
        question: "What is your residential type?",
        options: [
            { text: "Apartment", value: 10.25, image: "images/8apartment.jpeg" },
            { text: "Independent house", value: 17.42, image: "images/8indephouse.jpeg" },
            { text: "Villa", value: 21.52, image: "images/8villa.jpeg" }
        ]
    },
    {
        question: "What is the number of high energy devices frequently used?",
        options: [
            { text: "AC - 0, Water heater - 2", value: 13.12, image: "images/AC0WH2.jpg" },
            { text: "AC - 1, Water heater - 2", value: 22.96, image: "images/AC1WH2.jpg" },
            { text: "AC - 2, Water heater - 2", value: 32.8, image: "images/AC2WH2.jpg" },
            { text: "AC - 3, Water heater - 3", value: 6.56, image: "images/AC3WH3.jpg" }
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
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('option');

        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.onclick = () => selectOption(option.value);

        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image; // Ensure the path is correct
            img.alt = option.text; // Accessibility
            img.classList.add('option-image');
            buttonContainer.appendChild(img);
        }

        buttonContainer.appendChild(button);
        quizContainer.appendChild(buttonContainer);
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
    quizContainer.innerHTML = '';

    const resultText = `Your estimated carbon footprint is ${totalCO2.toFixed(2)} kg CO2/day.`;
    quizContainer.innerHTML = `<div class="result">${resultText}</div>`;

    // Add the image
    const resultImage = document.createElement('img');
    resultImage.src = "images/CO2FP.jpg"; // Update with the correct path to your image
    resultImage.alt = "Carbon Footprint Result"; // Accessibility
    resultImage.classList.add('result-image'); // Add a class for styling if needed

    quizContainer.appendChild(resultImage);
}

// Start the quiz
showQuestion();

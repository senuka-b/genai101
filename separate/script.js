document.addEventListener('DOMContentLoaded', () => {
    const factDisplay = document.getElementById('fact-display');
    const generateFactButton = document.getElementById('generate-fact');
    const addFactButton = document.getElementById('add-fact');
    const newFactInput = document.getElementById('new-fact');
    const toggleModeButton = document.getElementById('toggle-mode');


    let facts = JSON.parse(localStorage.getItem('psychologyFacts')) || [
        "The placebo effect is a real psychological phenomenon.",
        "People are more likely to remember the first and last items in a list.",
        "Cognitive dissonance is the mental discomfort from holding two conflicting beliefs.",
        "The human brain can process images as quickly as 13 milliseconds.",
        "Smiling can trick your brain into feeling happier.",
        "Your brain uses 20% of the total oxygen and blood in your body.",
        "The average person has about 70,000 thoughts a day.",
        "Memories are reconstructed each time they are recalled.",
        "The color blue has been shown to have a calming effect.",
        "People are more creative when they are tired.",
        "The brain is more active at night than during the day.",
        "Yawning helps cool the brain.",
        "The human attention span is shorter than that of a goldfish.",
        "Music can help reduce anxiety and improve mood.",
        "The brain can generate enough electricity to power a small light bulb.",
        "Laughter increases the release of endorphins, the body's natural feel-good chemicals.",
        "The brain's storage capacity is virtually unlimited.",
        "Multitasking is less efficient than focusing on one task at a time.",
        "The brain continues to develop until around age 25.",
        "Daydreaming can help solve complex problems."
    ];

    function displayRandomFact() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    }

    function addNewFact() {
        const newFact = newFactInput.value.trim();
        if (newFact) {
            facts.push(newFact);
            localStorage.setItem('psychologyFacts', JSON.stringify(facts));
            newFactInput.value = '';
            alert('New fact added!');
        } else {
            alert('Please enter a valid fact.');
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    toggleModeButton.addEventListener('click', toggleDarkMode);

    generateFactButton.addEventListener('click', displayRandomFact);
    addFactButton.addEventListener('click', addNewFact);

    // Display a random fact on initial load
    displayRandomFact();
});

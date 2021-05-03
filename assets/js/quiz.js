// questions with only moderate answers
const moderateAnswers = 4;

// questions with strong answers
const strongAnswers = 7;

// Moderate answers give you one point
const moderateWeight = 1.0;

// Strogn answers give you two points
const strongWeight = 2.0;

// Get the maximum number of points possible
const maxPoints = moderateAnswers * moderateWeight + strongAnswers * strongWeight;

// adds the submitted answers to the results URL, useful for feedback from test takers
var right = 0.0;
var left = 0.0;
var lib = 0.0;

function calculateScore() {    
    // Get an HTML collection of every question
    const questions = document.getElementsByClassName('question');

    // Get an HTML collection of each possible answer
    const answers = document.getElementsByTagName('input');

    // Make sure every question has an answer before doing anything

    // Loop through each question
    for (let q = 0; q < questions.length; q++) {
        // Get every possible answer for the question
        const qAnswers = questions[q].getElementsByTagName('input');

        // Make sure at least one answer is selected
        var answered = false;
        for (let a = 0; a < qAnswers.length; a++) {
            if (qAnswers[a].checked) {
                answered = true;
                break;
            }
        }

        // The question is blank
        if (!answered) {
            // Tell the user
            alert(`Question #${q + 1} has not been answered!`);

            // Scroll to the question for them
            window.location.href = `#q${q + 1}`;

            // Refuse to calculate the results
            return;
        }
    }

    // Loop through each answer
    for (let a = 0; a < answers.length; a++) {
        // Apply the answer, if it's selected
        if (answers[a].checked) {
            // Get the answer's value
            let val = answers[a].value;

            // Get the correct weight, and add it to the correct axis
            left += moderateWeight * (val == 'Left1') + strongWeight * (val == 'Left2');
            lib += moderateWeight * (val == 'Lib1') + strongWeight * (val == 'Lib2');
            right += moderateWeight * (val == 'Right1') + strongWeight * (val == 'Right2');
        }
    }

    // divide by the points in total for each axis
    right /= maxPoints;
    left /= maxPoints;
    lib /= maxPoints;

    // convert to a number between 0 and 10 rounded to the nearest hundredth
    right = Math.round(right * 1000) / 100;
    left = Math.round(left * 1000) / 100;
    lib = Math.round(lib * 1000) / 100;

    window.location.href = "results.html?left=" + left + "&right=" + right + "&lib=" + lib;
}

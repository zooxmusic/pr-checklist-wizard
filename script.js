const steps = [
    {
        title: "Workflow & JIRA Ticket Order",
        questions: [
            "Did you create [Domain API] Object(s) and relevant tests?",
            "Did you implement the correct type of interface? (Aggregate, DomainObject, Entity, ValueObject)",
            "Did you define the properties correctly based on what is mandatory in the database?",
            "Did you create a `ConstraintValidator` for validation?",
            "Did you write a [Domain API] object test?",
            "Did you implement `happy_path`?",
            "Did you implement `allNullFields`?",
            "Did you implement `invalidFields`?"
        ]
    },
    {
        title: "Code Quality & Structure",
        questions: [
            "Did you write meaningful comments?",
            "Are variable and function names clear and self-explanatory?",
            "Have you removed unnecessary console logs?",
            "Did you follow the project's coding style guidelines?"
        ]
    },
    {
        title: "Test Coverage & Validation",
        questions: [
            "Did you write unit tests for your changes?",
            "Did you cover all null fields?",
            "Did you ensure pre-existing tests still pass?",
            "Did you add integration tests if necessary?"
        ]
    },
    {
        title: "Documentation & References",
        questions: [
            "Did you update relevant documentation?",
            "Did you document your PR description properly?",
            "Did you add README updates if necessary?"
        ]
    },
    {
        title: "Final Review & Submission",
        questions: [
            "Did you assign the correct reviewers?",
            "Have you included clear steps for testing?",
            "Did you communicate breaking changes properly?"
        ]
    }
];

let currentStep = 0;
const stepContainer = document.getElementById("step-container");

function showStep() {
    const step = steps[currentStep];
    stepContainer.innerHTML = `<h2 class="text-center">${step.title}</h2>`;
    step.questions.forEach((question, index) => {
        stepContainer.innerHTML += `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="q${currentStep}-${index}">
                <label class="form-check-label" for="q${currentStep}-${index}">${question}</label>
            </div>
        `;
    });

    document.getElementById("prev").disabled = currentStep === 0;
    document.getElementById("next").textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        alert("Checklist Complete! Ready to submit your PR.");
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
}

document.addEventListener("DOMContentLoaded", showStep);
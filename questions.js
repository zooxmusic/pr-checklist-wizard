const questions = {
    "1": {
        "type": "option",
        "number": 1,
        "name": "Choose an option...",
        "next": "2",
        "prev": null,
        "isLeaf": false,
        "options": [
            { "label": "Option A", "next": "2A" },
            { "label": "Option B", "next": "2B" }
        ]
    },
    "2A": {
        "type": "form",
        "number": 2,
        "name": "Step 2A: Fill out details",
        "next": "3",
        "prev": "1",
        "isLeaf": false
    },
    "2B": {
        "type": "form",
        "number": 2,
        "name": "Step 2B: Fill out details",
        "next": "3",
        "prev": "1",
        "isLeaf": false
    },
    "3": {
        "type": "submit",
        "number": 3,
        "name": "Final Step: Review and Submit",
        "prev": "2A",
        "isLeaf": true
    }
};

// Then just call buildWizard(questions);
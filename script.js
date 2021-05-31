let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

//Console Log Demo
errorBtns[0].addEventListener('click', () => {
    console.log("Console Log Demo");
});

//Console Error Demo
errorBtns[1].addEventListener('click', () => {
    console.error("Console Error Demo");
});

//Console Dir
errorBtns[2].addEventListener('click', () => {
    console.dir(document.head);
});

//Console dirxml
errorBtns[3].addEventListener('click', () => {
    console.dirxml(document);
});

//Console Group start
errorBtns[4].addEventListener('click', () => {
    console.group("a");
});

//Console group end
errorBtns[5].addEventListener('click', () => {
    console.groupEnd("a");
});

//console table
errorBtns[6].addEventListener('click', () => {
    console.table([
        {
            school: "West Covina High School",
            grade: "9th - 12th",
        },
        {
            school: "Hollencrest Middle School",
            grade: "6th - 8th",
        },
        {
            school: "University of California - San Diego",
            grade: "college",
        }
    ]);
});

//console start timer
errorBtns[7].addEventListener('click', () => {
    console.log("Time start");
    console.time();
});

//console end timer
errorBtns[8].addEventListener('click', () => {
    console.log("Time stopped");
    console.timeEnd();
});

//console trace
errorBtns[9].addEventListener('click', () => {
    const first = () => { second(); };
    const second = () => { console.trace(); };
    first();
});

//console global error
errorBtns[10].addEventListener('click', () => {
    try {
        throw new SyntaxError("Syntax error");
    }
    catch(error) {
        console.error(err)
    }
});

let log = document.getElementById("log");
try {
    log.innerHTML = asdf;
}
catch(err) {
    console.error("You errored");
}
finally {
    console.log("That's a okay however");
    log.innerHTML = "Console Log Demo";
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("????");
}
catch(err) {
    console.error(err.name + " " + err.message);
}

window.onerror = function (message) {
    console.log("ERROR");
    console.error("Conversion Error: Value converted to NaN");
    return true;
}
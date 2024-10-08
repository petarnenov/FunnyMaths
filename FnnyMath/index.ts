/**
 * The `Examine` class is responsible for generating and managing math exercises
 * for comparison operations. It keeps track of the number of correct and incorrect
 * answers and displays the results dynamically on a web page.
 * 
 * @class
 * @property {number} count - The total number of exercises generated.
 * @property {number} goodJob - The number of correct answers.
 * @property {number} badAnswer - The number of incorrect answers.
 * 
 * @method showResults - Updates the HTML elements with the current count of correct and incorrect answers.
 * @method compare - Compares two numbers and returns a string representing the comparison result ('>', '<', '=').
 * @method generateExercise - Generates a new exercise and appends it to the HTML element with id 'exercices'.
 * 
 * @constructor
 * @property {string} left - A randomly generated number as a string for the left operand.
 * @property {string} right - A randomly generated number as a string for the right operand.
 * 
 * @function res - Resets the exercises, clears the results, and generates a new set of exercises.
 */
class Examine {
    static count: number = 0;
    static goodJob: number = 0;
    static badAnswer: number = 0;
    static showResults() {
        let gj = document.getElementById('goodJob');
        let ba = document.getElementById('badAnswer');
const SIZE_ATTRIBUTE = '3';

class Examine {
    static count: number = 0;
    static goodJob: number = 0;
    static badAnswer: number = 0;
    static showResults() {
        let gj = document.getElementById('goodJob');
        let ba = document.getElementById('badAnswer');

        if (!gj || !ba) {
            return;
        }

        gj.innerHTML = (Examine.goodJob).toString();
        ba.innerHTML = (Examine.badAnswer).toString();
    }
    static compare(val1: number, val2: number): string {
        if (val1 > val2) return '>';
        if (val1 < val2) return '<';
        return '=';
    }

    left: string;
    right: string;

    //constructor fn
    constructor() {
        this.left = (Math.random() * 10).toFixed(0);
        this.right = (Math.random() * 10).toFixed(0);
    }
    generateExercise(): void {

        let addTag: HTMLElement | null = document.getElementById('exercices');

        if (!addTag) {
            return;
        }

        let succ = <HTMLAudioElement>document.getElementById('succ');
        let wrong = <HTMLAudioElement>document.getElementById('wrong');


        let labelLeft = document.createElement('input');
        labelLeft.setAttribute('type', 'text');
        labelLeft.setAttribute('size', SIZE_ATTRIBUTE);
        labelLeft.setAttribute('disabled', '');
        labelLeft.value = this.left;

        let labelRight = document.createElement('input');
        labelRight.setAttribute('type', 'text');
        labelRight.setAttribute('size', SIZE_ATTRIBUTE);
        labelRight.setAttribute('disabled', '');
        labelRight.value = this.right;

        let text = document.createElement('input');
        text.setAttribute('type', 'text');
        text.setAttribute('size', '1');
        text.setAttribute('placeholder', '> < =');
        text.setAttribute('disabled', '');
        text.value = Examine.compare(parseInt(labelLeft.value), parseInt(labelRight.value));

        addTag.appendChild(labelLeft);

        addTag.appendChild(text);
        addTag.appendChild(labelRight);

        let scase: number = parseInt((Math.random() * 3).toFixed(0));
        console.log(scase);

        switch (scase) {
            case 0: {
                //statements; 
                text.disabled=false;
                text.value = ""
                break;
            }
            case 1: {
                //statements; 
                labelLeft.disabled=false;
                labelLeft.value = ""
                break;
            }
            case 2: {
                //statements; 
                labelRight.disabled=false;
                labelRight.value = ""
                break;
            }
            default: {
                //statements;    
                labelLeft.disabled=false;
                labelRight.disabled=false;        
                labelRight.value = ""
                labelLeft.value = ""
                break;
            }
        }


        let submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'button');
        submitButton.setAttribute('value', 'Submit');
        submitButton.onclick = function () {
            if (Examine.compare(parseInt(labelLeft.value), parseInt(labelRight.value)) === text.value) {
                succ.play();
                labelLeft.setAttribute('disabled', '');
                labelRight.setAttribute('disabled', '');
                text.setAttribute('disabled', '');
                submitButton.setAttribute('disabled', '');
                Examine.goodJob++;
            }
            else {
                Examine.badAnswer++;
                wrong.play();
            }
            Examine.showResults();
        };

        addTag.appendChild(submitButton);

        let newLine = document.createElement('br');
        addTag.appendChild(newLine);
    }

}

function res(): void {
    let addTag = document.getElementById('exercices');
    if (!addTag) {
        return;
    }

    while (addTag.hasChildNodes()) {
        if (addTag.firstChild) {
            addTag.removeChild(addTag.firstChild);
        }
    }
    Examine.badAnswer = 0;
    Examine.goodJob = 0;
    Examine.showResults();
    for (let i = 0; i < 10; i++) {
        let examine = new Examine();
        examine.generateExercise();
    }
}
        if (!gj || !ba) {
            return;
        }

        gj.innerHTML = (Examine.goodJob).toString();
        ba.innerHTML = (Examine.badAnswer).toString();
    }
    static compare(val1: number, val2: number): string {
        if (val1 > val2) return '>';
        if (val1 < val2) return '<';
        return '=';
    }

    left: string;
    right: string;

    //constructor fn
    constructor() {
        this.left = (Math.random() * 10).toFixed(0);
        this.right = (Math.random() * 10).toFixed(0);
    }
    generateExercise(): void {

        let addTag: HTMLElement | null = document.getElementById('exercices');

        if (!addTag) {
            return;
        }

        let succ = <HTMLAudioElement>document.getElementById('succ');
        let wrong = <HTMLAudioElement>document.getElementById('wrong');


        let labelLeft = document.createElement('input');
        labelLeft.setAttribute('type', 'text');
        labelLeft.setAttribute('size', '3');
        labelLeft.setAttribute('disabled', '');
        labelLeft.value = this.left;

        let labelRight = document.createElement('input');
        labelRight.setAttribute('type', 'text');
        labelRight.setAttribute('size', '3');
        labelRight.setAttribute('disabled', '');
        labelRight.value = this.right;

        let text = document.createElement('input');
        text.setAttribute('type', 'text');
        text.setAttribute('size', '1');
        text.setAttribute('placeholder', '> < =');
        text.setAttribute('disabled', '');
        text.value = Examine.compare(parseInt(labelLeft.value), parseInt(labelRight.value));

        addTag.appendChild(labelLeft);

        addTag.appendChild(text);
        addTag.appendChild(labelRight);

        let scase: number = parseInt((Math.random() * 3).toFixed(0));
        console.log(scase);

        switch (scase) {
            case 0: {
                //statements; 
                text.disabled=false;
                text.value = ""
                break;
            }
            case 1: {
                //statements; 
                labelLeft.disabled=false;
                labelLeft.value = ""
                break;
            }
            case 2: {
                //statements; 
                labelRight.disabled=false;
                labelRight.value = ""
                break;
            }
            default: {
                //statements;    
                labelLeft.disabled=false;
                labelRight.disabled=false;        
                labelRight.value = ""
                labelLeft.value = ""
                break;
            }
        }


        let submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'button');
        submitButton.setAttribute('value', 'Submit');
        submitButton.onclick = function () {
            if (Examine.compare(parseInt(labelLeft.value), parseInt(labelRight.value)) === text.value) {
                succ.play();
                labelLeft.setAttribute('disabled', '');
                labelRight.setAttribute('disabled', '');
                text.setAttribute('disabled', '');
                submitButton.setAttribute('disabled', '');
                Examine.goodJob++;
            }
            else {
                Examine.badAnswer++;
                wrong.play();
            }
            Examine.showResults();
        };

        addTag.appendChild(submitButton);

        let newLine = document.createElement('br');
        addTag.appendChild(newLine);
    }

}

function res(): void {
    let addTag = document.getElementById('exercices');
    if (!addTag) {
        return;
    }

    while (addTag.hasChildNodes()) {
        if (addTag.firstChild) {
            addTag.removeChild(addTag.firstChild);
        }
    }
    Examine.badAnswer = 0;
    Examine.goodJob = 0;
    Examine.showResults();
    for (let i = 0; i < 10; i++) {
        let examine = new Examine();
        examine.generateExercise();
    }
}


import Examine from './Examine';

function res(): void {
    let addTag = document.getElementById('exercises');
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
document.addEventListener('DOMContentLoaded', () => {
    res();
});

class Exrcice {
    static count: number = 0;
    static goodJob: number = 0;
    static badAnswer: number = 0;
    static showReults() {
        let gj = document.getElementById('goodJob');
        let ba = document.getElementById('badAnswer');
        gj.innerHTML = (Exrcice.goodJob).toString();
        ba.innerHTML = (Exrcice.badAnswer).toString();
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
    createExer(): void {

        let addTag = document.getElementById('exercices');

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
        text.value = Exrcice.compare(parseInt(labelLeft.value), parseInt(labelRight.value));

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


        let subm = document.createElement('input');
        subm.setAttribute('type', 'button');
        subm.setAttribute('value', 'Submit');
        subm.onclick = function () {
            if (Exrcice.compare(parseInt(labelLeft.value), parseInt(labelRight.value)) === text.value) {
                succ.play();
                labelLeft.setAttribute('disabled', '');
                labelRight.setAttribute('disabled', '');
                text.setAttribute('disabled', '');
                subm.setAttribute('disabled', '');
                Exrcice.goodJob++;
            }
            else {
                Exrcice.badAnswer++;
                wrong.play();
            }
            Exrcice.showReults();
        };

        addTag.appendChild(subm);

        let newLine = document.createElement('br');
        addTag.appendChild(newLine);
    }

}

function res(): void {
    let addTag = document.getElementById('exercices');
    while (addTag.hasChildNodes()) {
        addTag.removeChild(addTag.firstChild);
    }
    Exrcice.badAnswer = 0;
    Exrcice.goodJob = 0;
    Exrcice.showReults();
    for (let i = 0; i < 10; i++) {
        let exer = new Exrcice();
        exer.createExer();
    }
}


var Exrcice = /** @class */ (function () {
    function Exrcice() {
        this.left = (Math.random() * 10).toFixed(0);
        this.right = (Math.random() * 10).toFixed(0);
    }
    Exrcice.showReults = function () {
        var gj = document.getElementById('goodJob');
        var ba = document.getElementById('badAnswer');
        gj.innerHTML = (Exrcice.goodJob).toString();
        ba.innerHTML = (Exrcice.badAnswer).toString();
    };
    Exrcice.compare = function (val1, val2) {
        if (val1 > val2)
            return '>';
        if (val1 < val2)
            return '<';
        return '=';
    };
    Exrcice.prototype.createExer = function () {
        var addTag = document.getElementById('exercices');
        var succ = document.getElementById('succ');
        var wrong = document.getElementById('wrong');
        var labelLeft = document.createElement('input');
        labelLeft.setAttribute('type', 'text');
        labelLeft.setAttribute('size', '3');
        labelLeft.setAttribute('disabled', '');
        labelLeft.value = this.left;
        var labelRight = document.createElement('input');
        labelRight.setAttribute('type', 'text');
        labelRight.setAttribute('size', '3');
        labelRight.setAttribute('disabled', '');
        labelRight.value = this.right;
        var text = document.createElement('input');
        text.setAttribute('type', 'text');
        text.setAttribute('size', '1');
        text.setAttribute('placeholder', '> < =');
        text.setAttribute('disabled', '');
        text.value = Exrcice.compare(parseInt(labelLeft.value), parseInt(labelRight.value));
        addTag.appendChild(labelLeft);
        addTag.appendChild(text);
        addTag.appendChild(labelRight);
        var scase = parseInt((Math.random() * 3).toFixed(0));
        console.log(scase);
        switch (scase) {
            case 0: {
                //statements; 
                text.disabled = false;
                text.value = "";
                break;
            }
            case 1: {
                //statements; 
                labelLeft.disabled = false;
                labelLeft.value = "";
                break;
            }
            case 2: {
                //statements; 
                labelRight.disabled = false;
                labelRight.value = "";
                break;
            }
            default: {
                //statements;    
                labelLeft.disabled = false;
                labelRight.disabled = false;
                labelRight.value = "";
                labelLeft.value = "";
                break;
            }
        }
        var subm = document.createElement('input');
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
        var newLine = document.createElement('br');
        addTag.appendChild(newLine);
    };
    Exrcice.count = 0;
    Exrcice.goodJob = 0;
    Exrcice.badAnswer = 0;
    return Exrcice;
}());
function res() {
    var addTag = document.getElementById('exercices');
    while (addTag.hasChildNodes()) {
        addTag.removeChild(addTag.firstChild);
    }
    Exrcice.badAnswer = 0;
    Exrcice.goodJob = 0;
    Exrcice.showReults();
    for (var i = 0; i < 10; i++) {
        var exer = new Exrcice();
        exer.createExer();
    }
}

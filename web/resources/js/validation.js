let YCorrect = false;
let RCorrect = false;
let XCorrect = false;

let x;
let y;
let valueR;

function validationY(){
    const Y = document.getElementById("inputY:mainInput").value.replace(",",".");
    const textArea = document.getElementById("inputY:mainInput");
    if(Y >= -3 && Y <= 5 && Y !== "" ){
        YCorrect = true;
        textArea.style.borderColor = "green"
        // resY.height = "15";
        // resY.width = "15";
        y = Y;
    }else {
        YCorrect = false;
        textArea.style.borderColor = "red"
        // resY.height = "15";
        // resY.width = "15";
    }
}

function validationR(){
    valueR = document.activeElement.text;
    document.getElementById("targetR").innerHTML = "Вы выбрали " + valueR;
    RCorrect = true;
    getPoint([]);
    canvas();
    return false;
}

function validationX(){
    if(this.event.submitter.value !== x) {
        x = this.event.submitter.value;
        XCorrect = true;
        for (let i = 0; i < this.event.currentTarget.length; i++) {
            if (this.event.currentTarget[i].value !== x) {
                this.event.currentTarget[i].disabled = true;
            }
        }
    }else {
        XCorrect = false;
        for (let i = 0; i < this.event.currentTarget.length; i++) {
            if (this.event.currentTarget[i].value !== x) {
                this.event.currentTarget[i].disabled = false;
            }
        }
    }
}

function validation(){
    if(XCorrect && YCorrect && RCorrect) {
        XCorrect = false;
        YCorrect = false;
        RCorrect = false;
        document.getElementById("targetR").innerText = "";
        let valueX = document.getElementById("buttonX");
        for (let i = 0; i < valueX.length; i++) {
            if (valueX[i].disabled) {
                valueX[i].disabled = false;
            }
            if (valueX[i].checked){
                valueX[i].checked = false;
            }
        }
        document.getElementById("inputY:mainInput").value = "";

        sendRequest([{name:"X-value", value:x}, {name:"Y-value", value:y}, {name:"R-value", value:valueR}]);
    }else {
        XCorrect = false;
        YCorrect = false;
        RCorrect = false;
        let valueX = document.getElementById("buttonX");
        for (let i = 0; i < valueX.length; i++) {
            if (valueX[i].disabled) {
                valueX[i].disabled = false;
            }
            if (valueX[i].checked){
                valueX[i].checked = false;
            }
        }
        document.getElementById("inputY:mainInput").value = "";
        document.getElementById("targetR").innerText = "";
    }
}


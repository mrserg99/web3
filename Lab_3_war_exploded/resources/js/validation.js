let YCorrect = false;
let RCorrect = false;
let XCorrect = false;

let x;
let y;
let r;

function validationY(){
    const Y = document.getElementById("inputY:mainInput").value.replace(",",".");
    // const resY = document.getElementById("mainInput");
    if(Y >= -3 && Y <= 5 && Y !== "" ){
        YCorrect = true;
        // resY.src = "images/greenCheckMark.png";
        // resY.height = "15";
        // resY.width = "15";
        y = Y;
    }else {
        YCorrect = false;
        // resY.src = "images/redCheckMark.png";
        // resY.height = "15";
        // resY.width = "15";
    }
}

function validationR(){
    r = document.activeElement.text;
    document.getElementById("targetR").innerHTML = "Вы выбрали " + r;
    RCorrect = true;
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

        sendRequest([{name:"X-value", value:x}, {name:"Y-value", value:y}, {name:"R-value", value:r}]);
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
    }
}

function createNotification(message) {
    let outputContainer = document.getElementById("outputContainer");
    if (outputContainer.contains(document.querySelector(".notification"))) {
        let stub = document.querySelector(".notification");
        stub.textContent = message;
        stub.classList.replace("outputStub", "errorStub");
    } else {
        let notificationTableRow = document.createElement("h4");
        notificationTableRow.innerHTML = "<span class='notification errorStub'></span>";
        outputContainer.prepend(notificationTableRow);
        let span = document.querySelector(".notification");
        span.textContent = message;
    }
}


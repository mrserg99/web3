let valueX;
let valueY;
function mouseXYDetected(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.addEventListener("click", function (event) {
    if(RCorrect) {
        let x = canvas.getBoundingClientRect().x;
        let y = canvas.getBoundingClientRect().y;
        let pointX = event.clientX - x;
        let pointY = event.clientY - y;
        valueX = (pointX-350)/(20);
        valueY = -(pointY-200)/(20);
        RCorrect = false;
        sendRequest([{name:"X-value", value:valueX}, {name:"Y-value", value:valueY}, {name:"R-value", value:valueR}]);
    }else {
        alert("Значение R не выбранно")
    }
    })
}

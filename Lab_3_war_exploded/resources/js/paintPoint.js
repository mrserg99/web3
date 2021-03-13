function paintPoint(x, y, r, result) {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const pointX = (+x)*(100/+r)+350;
    const pointY = 200-(+y)*(100/+r);
    context.beginPath();
    context.arc(pointX, pointY, 3, 0, Math.PI * 2);
    if(result){
        context.fillStyle = "green";
    }else {
        context.fillStyle = "red";
    }
    context.fill();
}
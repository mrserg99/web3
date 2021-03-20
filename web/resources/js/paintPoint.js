function paintPoint(x, y, r, result) {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const pointX = 350 + 20*x;
    const pointY = 200 - 20*y;
    context.beginPath();
    context.arc(pointX, pointY, 3, 0, Math.PI * 2);
    if(redOrGreen(x, y)){
        context.fillStyle = "green";
    }else {
        context.fillStyle = "red";
    }
    context.fill();
}

function takerData(points){
    points = points.slice(1, -1);
    points = points.replaceAll(";", "");
    points = points.split(", ");
    for (let i = 0; i < points.length; i++){
        points[i] = points[i].split(",");
        paintPoint(points[i][0], points[i][1], points[i][2], points[i][3]);
    }
    console.log(points);
}

function redOrGreen(x, y) {
    return  x >= 0 && x <= valueR && y >= 0 && y <= valueR && Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(valueR, 2) || // проверка окружности
    x <= 0 && x >= -valueR && y <= 0 && y >= -(valueR/2) && y - 0.5*x >= -2*valueR || // проверка треугольника
    x <= 0 && x >= -valueR && y >= 0 && y <= (valueR/2);
}

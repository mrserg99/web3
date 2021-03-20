function time(){
    document.getElementById('form:time').innerText = new Date().toLocaleTimeString();
    setInterval(function() {
        document.getElementById('form:time').innerText = new Date().toLocaleTimeString();
    }, 7*1000);
}
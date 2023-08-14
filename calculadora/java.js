function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

setInterval(function () {
    if (index === 6 && actualFunction !== "M+") {
        actualFunction = "M+";
        functionIteractions = 3;
    }

    if (index === 8 && actualFunction !== "M+") {
        actualFunction = "M+";
        functionIteractions = 3;
    }

    if (index === 10 && actualFunction !== "=") {
        actualFunction = "=";
        functionIteractions = 3;
    }

}, 200);



setInterval(function () {

    if (index === 1 && button === "on") {
        changeNext();
    } else if (index === 4 && button === "x-m") {
        changeNext();
    } else if (index === 6 && button === "m+") {
        if (functionIteractions > 1) {
            functionIteractions--;
        } else {
            actualFunction = null;
            changeNext();
        }
    } else if (index === 8 && button === "m+") {
        if (functionIteractions > 1) {
            functionIteractions--;
        } else {
            actualFunction = null;
            changeNext();
        }
    } else if (index === 10 && button === "=") {
        if (functionIteractions > 1) {
            functionIteractions--;
        } else {
            actualFunction = null;
            changeNext();
        }
    } else if (index === 2 && button === "off") {
        creditos();
    }

    button = null;

}, 200);

var index = 0;

function changePrev() {
    if (index > 0) {
        $("body").find("div").find("div").eq(index).removeClass("frame-active");
        index--;
        $("body").find("div").find("div").eq(index).addClass("frame-active");
        console.log(index);
    }
}







clickea = document.getElementById('hola'); 

clickea.addEventListener('click', saludar1);

function saludar1() {
    saludar2(nombre = prompt("Hola, como te llamas?"))
}

function saludar2(nombre){

    let frase = "Hola " + nombre + ", como estas?";
    if (nombre == "fede") {
        document.write(frase);
    }
    else if (nombre == "flor"){document.write("Todo en orden");
    }
    else {document.write("Disculpa, no puedes seguir.");
    }
}


clickea2 = document.getElementById('hola2');
si = document.getElementById('hola3');
no = document.getElementById('hola4');
clickea2.addEventListener('click', sino);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function sino() {
    let num = random(0, 1);
    if (num == 1) {
        si.style.backgroundColor = "black";
        no.style.backgroundColor = "white";
    }
    else if (num == 0) {
        no.style.backgroundColor = "black";
        si.style.backgroundColor = "white";
    }

}


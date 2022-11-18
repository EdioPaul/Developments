document.getElementById('formulario').addEventListener('submit', calcularVolume);

function calcularVolume(e){
    var raio = document.getElementById('raio').value;
    var altura = document.getElementById('altura').value;
    var resultadoVolume = document.getElementById('resultado');

    const pi = 3.1416;

    if(!raio && !altura){
        alert("Por favor preencha todos os campos Mexãnico!");
        return false;
    }

    const resultado = ( pi * (( raio * raio ) * altura ));

    resultadoVolume.innerHTML = '';
    resultadoVolume.innerHTML += resultado;

    document.getElementById('formulario').reset();

    e.preventDefault();
}

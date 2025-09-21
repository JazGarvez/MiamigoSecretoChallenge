// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
listaAmigos = new Set();


function agregarAmigo(){
  if(!amigo.value){
    alert('ingresa un nombre por favor');
  } else{
    listaAmigos.add(document.getElementById('amigo').value);
    limpiar();
  }   

}

function limpiar(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
  let amigosArray = Array.from(listaAmigos); // Convertimos el Set en un Array
  let indice = Math.floor(Math.random() * amigosArray.length);
  let amigoElegido = amigosArray[indice];
  console.log(amigoElegido);
  alert("el amigo elegido es "+ amigoElegido);
  return amigoElegido;
}




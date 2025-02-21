// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.




x =false
array1=[]
console.log()

///FLICKERING TEXT///
function flick(){
    
    
    
    if (x){document.querySelector("h2").style.visibility = "visible"}
    else {document.querySelector("h2").style.visibility = "hidden"}
    x=!x
    
    

}
flick();
setInterval(flick,850)

/// DISPLAY THE ARRAY ///

function displaylist(i1,i2){
    
    document.getElementById(i1).innerHTML = i2.map(item => `<li>${item}</li>`).join('');
    

}

/// PUSH ELEMENTS AL ARRAY //
function agregarAmigo(){

    document.getElementById("listaAmigos").classList.replace("result-list","name-list")

    secu1= document.getElementById("amigo").value
    if(secu1==""){console.log("la variable sec1 is working");
    alert("Primero debes ingresar un nombre")
    console.log(array1)
    console.log(array1.length)}
    
    else{
    
    
    //////GET  THE ELEMENTS ///
    array1.push(document.getElementById("amigo").value)
    document.getElementById("amigo").value=""
    console.log(array1)
    console.log(array1.length)
    

    //// DISPLAY THE ARRAY1 BY CREATING <LI> TAGS//////
    
    displaylist("listaAmigos",array1);}
    
    
    
    
}


///SORTEO///
function sortearAmigo(){

     
     document.getElementById("listaAmigos").classList.replace("name-list", "result-list")

     if (array1==0){console.log("if is working");alert("Primero debes ingresar el nombre de los jugadores")}


     else{sorteo=Math.floor(Math.random()*(array1.length))
     console.log("el valor de la variable sorte was "+sorteo);
     


     /// DISPLAY SORTEO//
     document.getElementById("listaAmigos").innerHTML =`<li>${array1[sorteo]}</li>`;


     
     }
}



/// REINICIA EL JUEGO ///
function otraVez()
{
    array1=[]
    console.log(array1)
    console.log(array1.length)
    document.getElementById("listaAmigos").textContent ="";
    console.log("otravez is done")

}




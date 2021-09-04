var covid="mexico";

function buscar(){
    var element = document.getElementById("elem");
    element.innerHTML="";

    covid=document.getElementById("covidtxt").value;
    console.log("covid:"+covid);
        

    const url = "https://covid-19.dataflowkit.com/v1/";

    fetch(url+covid)
    .then(function(response){
        return response.json();    
    })


    .then(function(data){
        long=data.length;
        console.log("lenght:"+ long);
        console.log(data);

            var div=crearNodo("div");
            var recuperadostotales=crearNodo("p");
            var pais=crearNodo("p");
            var actualizacionU=crearNodo("p");
            var casostotales=crearNodo("p")
            var muertes=crearNodo("p")
          
            pais.innerHTML=data["Country_text"];
            casostotales.innerHTML=data["Total Cases_text"]
            recuperadostotales.innerHTML=data["Total Recovered_text"];
            muertes.innerHTML=data["Total Deaths_text"]
            actualizacionU.innerHTML=data["Last Update"];
            
            
            adjuntar(div,pais);
            adjuntar(div,casostotales)
            adjuntar(div,recuperadostotales);
            adjuntar(div,muertes)
            adjuntar(div,actualizacionU);
            adjuntar(element,div); 
            
        
    })

        .catch(function(error){
        console.log(error)

    });
    function crearNodo(elemento){
        return document.createElement(elemento);
    } 
    function adjuntar(padre,hijo){
        return padre.appendChild(hijo);

    }
}

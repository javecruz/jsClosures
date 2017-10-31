//paginas 1º param = top, 2º param = nº ventana
var lol1 = ['50',1];
var lol2 = ['325',2];
var lol3 = ['600',3];
var time = 2000;
var ventanas = [];

var ordenCierre = [];

var clean1;
var clean2;
var clean3;
var clean4;

document.getElementById('vamos').onclick = function (){


//wait 3 seconds and start opening windows
clean1 = setTimeout(function () {
        
		for(i = 1; i<=3;i++){

		noSeQueHago(i);
/*

*/

		}


    }, 3000);


//wait 5 seconds and start closing windows


clean2 = setTimeout(function () {
        var a = document.getElementById("sel1");
		ordenCierre[0] = a.options[a.selectedIndex].value

		var b = document.getElementById("sel2");
		ordenCierre[1] = b.options[b.selectedIndex].value

		var c = document.getElementById("sel3");
		ordenCierre[2] = c.options[c.selectedIndex].value



		for(i = 1; i<=3;i++){

		noSeQueHagoCierra(ordenCierre[i-1],i);


		}
		

		// 5s + los 3s de antes + lo que tarda en abrir todo
    },5000 + time*3+3000);

}

document.getElementById('parar').onclick = function (){

	clearTimeout(clean1);
	clearTimeout(clean2);
	clearTimeout(clean3);
	clearTimeout(clean4);
    }








function abrir(ventana) {

	switch(ventana){

		case 1:

		ventanas[0] = crearPag(lol1);

		break;


		case 2:

		ventanas[1] = crearPag(lol2);

		break;

		case 3:

		ventanas[2] = crearPag(lol3);

		break;


	}


}


function crearPag(prop){

		a = window.open('', '', 'width=300,height=200,left=50,top='+prop[0]+',toolbar=yes');

		ndoc=a.document;
    	ndoc.open(); 
    	miDiv = ndoc.createElement("div");
    	miP = ndoc.createElement("P");
    	texto = ndoc.createTextNode("Estas en el navegador: " +  whoIs());
    	miP.appendChild(texto);
    	miH1 = ndoc.createElement("h1");
    	titulo = ndoc.createTextNode("Ventana Numero "+prop[1]);
    	miH1.appendChild(titulo);
    	miDiv.appendChild(miH1);
    	miDiv.appendChild(miP);
    	ndoc.appendChild(miDiv);

    	return a;
}



// x es la ventana e y es el indice del for para multiplicar
function noSeQueHagoCierra(x,y) {

	

	clean3 = setTimeout(function () {
		// -1 porque ventanas va de 0 a 2 y lo que recibe es de 1 a 3
   	document.getElementById("mensaje").innerHTML += "Cerrando ventana "+x +"<br>";
   	ventanas[x-1].close();

   	

}, time * y)



}




function noSeQueHago(x) {

	clean4 = setTimeout(function () {
    abrir(x);
    document.getElementById("mensaje").innerHTML += "Abriendo ventana "+x+"<br>";
}, time * x)
}







function whoIs(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}




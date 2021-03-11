// JavaScript Document

//Aviso Revisar contenido inferior &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Diseno y programacion por Ricardo Mora y Carlos Vega


//1.Restablece el tamaño del iframe
setTimeout(iframeAmpliar, 4000);
function iframeAmpliar (){parent.document.getElementById("com").style.height="100%";}
//Fin Restablece el tamaño del iframe

//2. Aviso Revisar contenido inferior

var tamanoNavegador = window.innerHeight; /*screen.availHeight;*/
var tamanoContenido = document.body.offsetHeight;
var scrolabajo=parseInt(document.body.scrollTop);

var dispositivo2Android = navigator.userAgent.toLowerCase();

document.write('\
<div id="scrolling" style="position:fixed; right:15px; bottom:25px; display:none; width:42px; height:70px; border:red 0px solid;">\
<button class="btn btn-default"  style=" position:relative; float:left; clear:both; background-color:rgba(32,115,2,1.00); color:#FFFFFF;" onclick="scrollWin(-150);"><span class="fa fa-angle-up"></span></button>\
\
<button class="btn btn-default"  style=" position:relative; float:left;  background-color:rgba(32,115,2,1.00); color:#FFFFFF;" onclick="scrollWin(150);"><span class="fa fa-angle-down"></span></span></button>\
</div>\
');

/*window.onload = function () {
	
	
	if( dispositivo2Android.search(/android/) > -1 ){
		
		document.getElementById("scrolling").style.display="inline"; 	
	
		if(scrolabajo < 150){
		
				if(tamanoNavegador < tamanoContenido ){
				contenidoInferior(); //activa la instruccion para revisar el contenido inferior	
				aviso = setTimeout(quitarAviso, 8000);
				}
		}
	}
	
}*/

function contenidoInferior(){
	var aviso = document.createElement("div");
	aviso.style.position="fixed";
	aviso.className="bubble"
	aviso.id="revisar"
	aviso.style.bottom=20+"px";
	aviso.style.right=70+"px";
	aviso.innerHTML= "Revisar contenido inferior.<div onClick='quitarAviso();' style=' position:absolute; top:-15px; right:-10px; width:25px; height:28px;border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; border:2px solid #000000; background-color:#FFFFFF; color:#9F0000; font-weight:bold; padding:0px; line-height:20px; cursor:pointer;'>X</div> ";
	document.body.appendChild(aviso);
	}

function quitarAviso(){
	document.getElementById('revisar').style.display="none";
	clearTimeout(aviso);
}


//Botones para scroll
function scrollWin(scrol) { window.scrollBy(0, scrol);}


// Fin Aviso Revisar contenido inferior


//3.Ipad &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var dispMac1 = navigator.userAgent.toLowerCase();
	  
	   
      if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		 parent.document.getElementById("com").style.height="100%"; 
		  }


	function tamanoIframe (tamano){
		 
	    if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		parent.document.getElementById("com").style.height=tamano;
		//parent.document.getElementById("com").style.border="red 1px solid";
	  }
	}
	
	 var TopAnterior;
	 
	function parentSubir(){
      if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		  TopAnterior=parseInt(parent.document.getElementById("content").scrollTop);
		  
		  parentTop =parent.document.getElementById("content");
			parentTop.scrollTop =0;
		
		  }
	  }
	  
	function parentAjustar() {
		parentTop =parent.document.getElementById("content");
		parentTop.scrollTop =TopAnterior;
		}  
	
	
// Ipad &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//4. Funciones para habilitar y deshabilitar los botones - INICIA &&&&&&&&&&&&&&&&&&
function enableBtn(div){document.getElementById(div).disabled=false;} 
  
function enableLink(div, divThis){
var laclase= document.getElementById(div).className;
var thisdiv= document.getElementById(divThis).className;


	if (laclase.indexOf("disabled") != -1) {
		document.getElementById(div).className=laclase + " brillo ";
		laclase2=laclase.replace("disabled", '');
		laclase3=laclase2.replace("btn", '');
		document.getElementById(div).className=laclase3 + " brillo ";
		laclase="";
	}
	
	if (thisdiv.indexOf("brillo") != -1) {
		thisdiv2=thisdiv.replace("brillo", '');
		document.getElementById(divThis).className=thisdiv2;
	}
	
}

function quitarbrillo(sinbrillo){
var thisdiv= document.getElementById(sinbrillo).className;
	if (thisdiv.indexOf("brillo") != -1) {
		thisdiv2=thisdiv.replace("brillo", '');
		document.getElementById(sinbrillo).className=thisdiv2;
	}
}
// Fin Funciones para habilitar y deshabilitar los botones - TERMINA &&&&&&&&&&&&&&&&&&

// Contenido oculto - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var elSigTex;
	function InicialTex (text1){
	document.getElementById(elSigTex).style.display='none'; 
	document.getElementById(text1).style.display='block';}
			
	function sigText(text1, text2){
		document.getElementById(text1).style.display='none'; 
		document.getElementById(text2).style.display='block';
		elSigTex =text2;
		}
			
// Fin Contenido oculto - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Botones oculto - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
	var elSigBtn;
			function InicialBtns (btn1){
			document.getElementById(elSigBtn).style.display='none'; 
			document.getElementById(btn1).style.display='block';}
			
			function sigBtns(btn1, btn2){
			document.getElementById(btn1).style.display='none'; 
			document.getElementById(btn2).style.display='block';
			elSigTex =btn2;
			}
// Botones oculto - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Cambio Texto aparece/desaparecer - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var SigTxts;		
	function InicialInt(text1){
		document.getElementById(SigTxts).style.display='none'; 
		document.getElementById(txts1).style.display='block';
		}
	
	function sigInt(txts1, txts2){
		document.getElementById(txts1).style.display='none'; 
		document.getElementById(txts2).style.display='block';
		SigTxts =instru2;
		}
// Cambio Texto aparece/desaparecer - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Cambio instrucciones - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var SigInst;		
	function InicialInt(text1){
		document.getElementById(SigInst).style.display='none'; 
		document.getElementById(instru1).style.display='block';
		}
	
	function sigInt(instru1, instru2){
		document.getElementById(instru1).style.display='none'; 
		document.getElementById(instru2).style.display='block';
		SigInst =instru2;
		}
			
	if( dispMac1.search(/android|iphone|ipod|ipad/) > -1 ){
		
	var AjusteInstru = document.getElementsByClassName("instruPC");	
	var i;
		for (i = 0; i < AjusteInstru.length; i++) {
      
		//AjusteInstru[i].style.border = "red 1px solid";
		AjusteInstru[i].style.display = "none";	
		}
		
		var AjusteInstru2 = document.getElementsByClassName("instruTouch");
		var w;
			for (w = 0; w < AjusteInstru2.length; w++) {
      
		AjusteInstru2[w].style.display = "inline";	
		}/**/
	}			
// Cambio instrucciones - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Plecas del footer - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
	document.write('<footer id="piepagina" >\
	<div class="col-md-12" > \
     <div style="position:relative;"></div>\</div>\
     \
    <div class="row foot" style="margin:0px; " > </div>\
	</footer>\
		');
// Plecas del footer - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Bootstrap componentes 

//Componente pestanas - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&
$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});
//Componente pestanas - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Componente popover - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var ref="hover focus"

if( dispMac1.search(/iphone|ipod|ipad/) > -1 ){
		ref="click"
		  }

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({trigger:ref});
});
// Componente popover - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Componente Modal - INICIA &&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
	$(function () {
		$('.modal').modal({
			show: false,
			keyboard: false,
			backdrop: 'static'
			});
		});
// Componente Modal - TERMINA &&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
   
// Fin Botones obligatorios

/* ---------------------- MODAL PANTALLA COMPLETA - INICIA ---------------------- */
$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

/* ---------------------- MODAL PANTALLA COMPLETA - INICIA ---------------------- */

/* ---------------------- SECUENCIAS DE APARICIÓN - INICIA ---------------------- */
setTimeout(animarOBJ, 600);

var items = $('.animar').hide();  
  var i = 0; 
  
function animarOBJ () { 

   (function displayItem() {items.eq(i++).delay(200).fadeIn(500,displayItem);})(); 
   
}
/* ---------------------- SECUENCIAS DE APARICIÓN - TERMINA ---------------------- */



/* ---------------------- APARICIÓN ELEMENTOS - INICIA ---------------------- */
function FadeIn1(){
	 //$("#textoOculto1").delay(300).show(1500); //opción animación 1
	 $("#textoOculto1").delay(500).slideDown(1200); //opción animación 2
	 //$("#textoOculto1").toggle("swing"); //opción animación 3
	 //$("#textoOculto1").fadeTo(1500,1.00); //opción animación 4
	 //$("#textoOculto1").fadeToggle(1500); //opción animación 5
	 //$("#textoOculto1").delay(500).fadeIn(2000); //opción animación 6
  }
    
function FadeIn2(){
	 $("#textoOculto2").slideDown(1000);
  } 
  
function FadeIn3(){
	 $("#textoOculto3").slideDown(1000);
  } 

function FadeIn4(){
	 $("#textoOculto4").slideDown(1000);
  }  
  
function FadeIn5(){
	 $("#textoOculto5").slideDown(1000);
  }

function FadeIn5(){
	 $("#textoOculto6").slideDown(1000);
  }
  
function divFadeIn(idDiv){
	 $(idDiv).fadeIn(1000);
  }

function divFadeOut(idDiv){
	 $(idDiv).fadeOut(1000);
  }
/* ---------------------- APARICIÓN ELEMENTOS - TERMINA ---------------------- */


/* ---------------------- SCROLL AVANCE - INICIA ---------------------- */
window.onscroll = function() {myFunctionAvance()};

function myFunctionAvance() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("miAvance").style.width = scrolled + "%";
}
/* ---------------------- SCROLL AVANCE - TERMINA ---------------------- */

/* ---------------------- ALERTA MODAL - INICIA ---------------------- */
  
function myFunctionAlerta(alertaTamano) {
  if (alertaTamano.matches) {
     $('#ErrorResolucion').modal('show');
  } else {
   $('#ErrorResolucion').modal('hide');
  }
}

var alertaTamano = window.matchMedia("(max-width: 574px)")
myFunctionAlerta(alertaTamano)
alertaTamano.addListener(myFunctionAlerta)

  
document.write('\<div class="modal fade modalAlerta" id="ErrorResolucion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
	<div class="modal-dialog modal-sm" role="document">\
	<div class="modal-content">\
	<div class="modal-header">\
		<h4 class="modal-title">Error</h4>\
	</div> <!-- modal-header -->\
	<div class="modal-body">\
	<div class="row">\
		<div class="col-12">\
			<p style="text-align:center; color:white;">La resolución minima de producción y visualización es <b>574px</b>.</p>\
			<div class="img-fluid mx-auto" style="margin-top:-5px; border:red 0px solid; padding-left:10px;"> <svg  version="1.1" id="Lager_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \
	 width="241.488px" height="248.482px" viewBox="0 0 241.488 248.482" enable-background="new 0 0 241.488 248.482"\
	 xml:space="preserve">\
<polygon fill="#FFFFFF" stroke="#000000" stroke-width="0.216" points="230.817,77.814 165.759,12.756 75.025,12.756 9.967,77.814 \
	9.967,168.642 75.025,233.7 165.759,233.7 230.817,168.642 "/>\
<polygon fill="#E03A3E" points="79.045,223.885 161.739,223.885 221.002,164.528 221.002,81.834 161.739,22.571 79.045,22.571 \
	19.782,81.834 19.782,164.528 "/>\
<polygon fill="#FFFFFF" points="90.262,102.336 75.244,102.336 75.244,93.768 113.475,93.768 113.475,102.336 98.799,102.336 \
	98.799,152.688 90.262,152.688 "/>\
<path fill="#FFFFFF" d="M173.891,152.688v-58.92h19.1c9.005,0,16.296,7.291,16.296,16.171c0,8.974-7.291,16.265-16.171,16.265\
	h-10.688v26.484H173.891z"/>\
<path fill="#FFFFFF" d="M120.33,133.9L120.33,133.9c0,10.469,8.537,19.006,19.131,19.006c10.438,0,19.006-8.537,19.006-19.006\
	v-21.313c0-10.563-8.568-19.038-19.006-19.038c-10.594,0-19.038,8.475-19.131,18.913V133.9z"/>\
<path fill="#FFFFFF" d="M45.363,114.675c0.405,0.343,0.841,0.654,1.371,0.748l14.987,6.45c3.053,1.683,5.39,4.424,6.449,7.821\
	c0.312,1.589,0.53,3.178,0.53,4.736c0,10.158-8.257,18.477-18.477,18.477c-8.662,0-16.171-6.013-18.072-14.457l8.226-2.43\
	c0.748,4.767,4.985,8.35,9.846,8.35c5.484,0,9.908-4.424,9.908-9.939c0-0.841-0.094-1.682-0.312-2.43\
	c-0.218-0.841-0.748-1.558-1.464-2.088c-0.218-0.218-0.53-0.342-0.748-0.436l-14.146-6.014c-1.185-0.529-2.244-1.059-3.303-1.807\
	c-0.187-0.218-0.405-0.405-0.623-0.623C28.88,111.31,35.735,93.55,50.224,93.55c6.418,0,12.338,3.926,14.675,10.033l-7.821,3.49\
	c-0.966-2.96-3.801-4.954-6.854-4.954c-4.02,0-7.291,3.271-7.291,7.291C42.933,111.403,43.773,113.304,45.363,114.675z"/>\
<path fill="#E03A3E" d="M149.806,133.9v-21.313c0-5.827-4.643-10.469-10.344-10.469c-5.827,0-10.47,4.643-10.47,10.469V133.9l0,0\
	c0,5.733,4.643,10.469,10.47,10.469C145.163,144.369,149.806,139.633,149.806,133.9z"/>\
<path fill="#E03A3E" d="M193.116,117.542c4.206,0,7.603-3.396,7.603-7.603c0-4.113-3.396-7.603-7.509-7.603h-10.781v15.206H193.116z\
	"/>\
</svg> </div>\
			</div> <!-- col -->\
	</div> <!-- row -->\
	</div> <!-- modal-body -->\
	<div class="modal-footer">\
		<button type="button"onClick="parentAjustar();" class="btn btn-danger" data-dismiss="modal">Cerrar <span class="fa fa-window-close"></span></button>\
	</div>  <!-- modal-footer -->\
	</div> <!-- modal-content -->\
	</div> <!-- modal-dialog -->\
</div> <!-- modal fade -->');

/* ---------------------- ALERTA MODAL - TERMINA ---------------------- */

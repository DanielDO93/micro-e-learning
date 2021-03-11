var _presentaVideo,     /* boton que activa el video*/
    _vytID,             /* id del video cargado en Youtube*/
    _vytContenedor,     /* id del div que contendra el video*/
    _divPreguta,        /* id del div que contiene la pregunta para el video*/
    _vytSegundos,       /* segundos que dura el video*/
    _primeraInstru,     /* id de la primera instruccion, se cambiara por segunda instruccion*/
    _segundaInstru,     /* id de la segunda instruccion*/
    _vytAlto,           /* alto del video */
    _vytAncho,
    _padreVideo;          /* ancho del video */

/*initVideoYTImss(VYTID,VYTCONTENEDOR,VYTBACTIVA,VYTPREGUNTA,VYTSEGUNDOS,VYTANCHO,VTYPADRE);*/
function initVideoYTImss(vytID,vytContenedor,botonActiva,divPreguta,vytSegundos,vytAncho,padreVideo,primeraInstru,segundaInstru) 
{ 
    _vytID          = vytID;
    _vytContenedor  = vytContenedor;
    _divPreguta     = divPreguta;
    _vytSegundos    = getMiliSeg(vytSegundos);
    _vytAncho       = ''+vytAncho+'';
    _vytAlto        = ''+getVYTAlto(vytAncho)+'';
    //console.log("variables iniciadas");
    _presentaVideo = document.getElementById(''+ botonActiva +'');
    
    if (_presentaVideo != undefined || _presentaVideo != null) { // si videoPresentacion es diferente de undefined o diferente de null
		_padreVideo = padreVideo;
        if(primeraInstru != undefined && segundaInstru != undefined){
           _primeraInstru  = primeraInstru;
            _segundaInstru  = segundaInstru;
        }
        //console.log(_presentaVideo);
        
		if(!document.getElementById('cssload1')) {
			var link = document.createElement('link');
			link.id = 'cssload1';
			link.rel = 'stylesheet';
			link.href = 'css/css-loader/css-loader.css';
			document.head.appendChild(link);
		}

		if(!document.getElementById('cssload2')) {
			var link = document.createElement('link');
			link.id = 'cssload2';
			link.rel = 'stylesheet';
			link.href = 'css/css-loader/loader-clock.css';
			document.head.appendChild(link);
		}
	
	}
    

}

function getVYTAlto(vWidth)
{
    var vHeight = (vWidth / 16) * 9;
    return vHeight;
}

function getMiliSeg(segundos)
{
    return (segundos*1000);        
}

// funcion que inicia la reproduccion del video a partir del elemento videoPresentacion
function iniciarPresentacion() 
{
    //console.log("iniciar presentacion activado");	
    /*console.log(_presentaVideo);
    console.log(_vytID);
    console.log(_vytContenedor);
    console.log(_divPreguta);
    console.log(_vytSegundos);
    console.log(_vytAlto);
    console.log(_vytAncho);
    console.log(_padreVideo);*/
	_presentaVideo.setAttribute("style","display:none"); // se oculta la imagen o boton que activa el video
    document.getElementById(_padreVideo).setAttribute("style","display:block");
    $("#" + _padreVideo).css("background-color","#000");
    $("#" + _padreVideo).append('<div id="spinner-video" class="loader-default is-active"></div>');
	vytPlayVideo(); // damos reproducir al video con la funcion videoPlay()
}


// funcion que aparece la info dode que indica las acciones sobre el video ### recibe como parametro el id del div que contiene la info
function muestraInfoRetro(retroIdDiv) {
		//console.log(retroIdDiv);
		retroA	 = document.getElementById(retroIdDiv);// se selecciona el elemento con el id enviado y se almacena en la variable retroA
		if (retroA != null) { // si retroA NO es nula o vacia
			retroA.setAttribute("style", "display:block;"); // asignar atributo style a retroA donde display : block
		}
}

// funcion que habilita la retro alimentacion del video  ### parametros necesarios retroMuestra, respuestasPregunta, idSeleccionado // parametros por default btnActiva
function enableRetro(retroMuestra,respuestasPregunta,idSeleccionado,btnActiva) 
{
	var resPregunta = document.getElementById('' +respuestasPregunta+ ''); // obtenemos el elemento con el id respuestasPregunta que contiene el id del div donde se encuentran las respuestas
	resPregunta.setAttribute("style", "display:none;"); // ocultamos al elemento almacenado en resPregunta
	_buttonActiva = btnActiva; //variable que habilita el boton siguiente en ontra pagina html

	var retMuestra = document.getElementById('' +retroMuestra+ ''); // obtenemos el elemento con el id retroMuestra
	if (retMuestra != null) { // si retMuestra es diferente de null
		retMuestra.setAttribute("style", "display:block;"); // asignamos el atributo style retMuestra donde display es igual a block
	}
	saveRespuesta(idSeleccionado); // llamar a la funcion saveRespuesta que almacena la respuesta contenida en el idSeleccionado
	getRespuesta(); // llamar a la funcion getRespuesta que obtiene las respuestas almacenadas en el localStorage
}

function muestraPregunta() 
{
    //console.log("esta en muestra preguta")
    var buttonsRetro = document.getElementById(''+ _divPreguta +''); // obtenemos el elemento con el id _preguntaId y lo asignamos a buttonsRetro
    buttonsRetro.setAttribute("style","display:block;"); // mostramos al elemento buttonsRetro en la pagina, el cual contiene la pregunta a mostrar
    
    if (_primeraInstru != null && _segundaInstru != null) { // si la primera y segunda instruccion no estan vacias
        sigInt(_primeraInstru, _segundaInstru); // activamos una unstruccion para el video
    }
    
}

function vytPlayVideo()
{
    //console.log("inicia vytPlayVideo");
    
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
}

// 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        //console.log("entramos a onYouTubeIframeAPIReady");
        //console.log("_vytContenedor: "+_vytContenedor);
        player = new YT.Player(_vytContenedor, {
            height: _vytAlto,
            width: _vytAncho,
            videoId: _vytID,
            playerVars: { 'autoplay': 1, 'controls': 1,'rel':0 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
        
    }
    
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
        document.getElementById("spinner-video").setAttribute("style","display:none;"); // desaparece spinner
        event.target.setVolume(100);
        //event.target.serRel(0);
    }
    
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, _vytSegundos);
            done = true;
        }
    }
        
    function stopVideo() {
        muestraPregunta();
        player.stopVideo();
    }

/*

medidas youtube

2160p (4K) - 3840 x 2160 pixeles
1440p (2K) - 2560 x 1440 pixeles
1080p (HD) - 1920 x 1080 pixeles
720p (HD) - 1280 x 720 pixeles
480p - 854 x 480 pixeles
360p - 640 x 360 pixeles
240p - 426 x 240 pixeles
144p – 256 x 144 pixeles
*/

/* se obtiene una resolucion a 16*9 */
/* requerimos el ancho, ejemplo:
        vytAncho = 640;
        vytAlto = (vytAncho/16)*9; // 16*9
        vytAlto = (640 / 16) * 9;
        vytAlto = 40 * 9;
        vytAlto = 380;        
        
*/

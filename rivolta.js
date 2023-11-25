var attivo = true;
var mobile = false;
var tablet = false;
var dimensione = window.matchMedia("(max-width: 600px)"); 
var dimensione2 = window.matchMedia("(max-width: 1023px)"); 

//controlla le dimensioni dello schermo e restituisce la vista correttta
async function controlloMediaQuery() {
  if (dimensione.matches) { // If media query matches
    mobile = true;
  } else if (dimensione2.matches){
    mobile = false;
    tablet = true;
  }
  else{
    mobile = false;
    tablet = false;
  }
  
	  // Per catturare pressione del tasto enter
	var inputButton = document.getElementById("passwordInput");

	inputButton.addEventListener("keypress", function(event) {
	  if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("buttonInput").click();
	  }
	});
  
  sbloccaSfida("start");  
  
} 

//loader, non utilizzato
function carica(){
    setTimeout(function(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("vista").style.display = "inline"; }, 1000);
} 

function sbloccaSfida(sfida){
	
	var titolo = document.getElementById("titolo");
	var descrizione = document.getElementById("descrizione");
	var testo = document.getElementById("testoSfida");
	var foto = document.getElementById("foto");
	var inputIndizio = document.getElementById("inputIndizio");	
	
	document.getElementById("casella").style.visibility = "hidden";
	foto.style.visibility = "hidden";
	foto.style.height = "0";
	foto2.style.visibility = "hidden";
	foto2.style.height = "0";
	document.getElementById("passwordInput").value = "";
	endCursor(descrizione);
	endCursor(testo);
	endCursor(inputIndizio);
	
	let title;
	let desc;
	let text;
	let img;
	let indizio;
	let time = 0;
	let immagine = false;
	
	sfida = sfida.toLowerCase();
	
	switch(sfida){
		
		// ----- PER LE SFIDE ----- 
		
		case "3406966054":
			title = "SEMINA LE GUARDIE";
			
			img = "";
			
			desc = "I tuoi compagni sono riusciti ad intrufolarsi nell\u0027arsenale nemico. Ora però scappa prima che le guardie nemiche ti prendano "+
				"e ottengano nuovamente le loro armi.";
			
			text = "Fai un giro completo del campo d\u0027erba di Piazza d\u0027Armi. "+
				"I componenti della squadra faranno un giro a testa a mo di staffetta. "+
				"Se barate lo fate di nuovo :) ";

			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";			
		break;
		
		case "bernardipietro":
			title = "IL GIUSTO APPOGGIO";
			
			img = "";
		
			desc = "Per vincere non serve solo la forza ma anche l\u0027appoggio del popolo";
		
			text = "Mettere a terra al massimo il seguente numero di parti del corpo a terra. Una persona dovrà fare le foto: +
				"- 2 PIEDI, UN GOMITO"+
				"- 1 PIEDE, 3 GINOCCHIA"+
				"- 6 MANI, 2 PIEDI";
			
			indizio = "Ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		case "rapisardar":
			title = "IL DISCORSO";
			
			img = "";
		
			desc = "Meglio un culo gelato che un gelato nel culo. No forse non era cos\u00EC. Scrivi tu dai";
		
			text = "Scrivi una poesia con rima baciata sul popolo di 14 versi, usando le parole: "+
				"comunitroia, finocchio, segreto, tarallo, scafazzare, incapace circonvenuto, liceo matematico ";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		case "marchesiellotrucco":
			title = "IL MERCATO";
			
			img = "";
		
			desc = "Noi siamo ovunque";
		
			text = "Spiare il nemico in questa guerra \u00E8 un\u0027arte fondamentale. Cos\u00EC come lo sono i travestimenti. Sappiamo che un informatore nemico si trova da Yasmine. "+
					"Uno di voi si avvolger\u00E0 nella carta stagnola e si far\u00E0 passare per un kebab arrotolato. Andate quindi da Yasmine e fatevi fotografare DENTRO al "+
					"locale con il travestimento addosso. Sulla stagnola scrivete \'SENZA PICCANTE, SENZA CIPOLLA, SENZA CARNE E SENZA IMPASTO\'";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		case "buoncammino":
			title = "IL PALAZZO";
			
			img = "";
		
			desc = "Solo chi \u00E8 pronto al sacrificio pu\u00F2 aspirare a diventare un leader";
		
			text = "Come da tradizione, ogni leader che si rispetti e che ambisca a governare deve dimostrare la propria forza e di essere disposto "+
				"a sacrificarsi. La tradizione vuole che venga quindi offerta in sacrificio una parte di s\u00E8. Ma non siamo barbari, niente taglio "+
				"delle dita o delle orecchie: una ceretta ad un uomo andrà più che bene. A seguire, chi non ha preso parte alla ceretta, "+
				"deve sottoporsi comunque a un altro rito d\u0027iniziazione: una ragazza dovrà sculacciare in modo divertente un ragazzo. "+
				"Ovviamente filmato cos\u00EC da potervi ricattare in futuro quando sarete personaggi famosi ";
";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";
		break;
			
		case "5":
			title = "LA PIAZZA";
			
			img = "";
		
			desc = "Questa è la voce del popolo";
		
			text = "Intervista un uomo che non conosci e chiedigli qual \u00E8 secondo lui il miglior metodo di depilazione, e perch\u00E8. " +
				"Il tutto ovviamente filmato";
			
			indizio = "Indizio: ti verr\u00E0 fornito alla fine della sfida";
		break;
		
		// ----- PER I LUOGHI ----- 
		case "xarsenale":
			title = "L\u0027ARSENALE";
			
			img = "arsenale.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Numero di telefono del laboratorio restauro";
			
			immagine = true;
			
		break;
		
		case "xpiazza":
			title = "LA PIAZZA";
			
			img = "duomo.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Numero di guglie visibili sulla facciata del duomo";
			
			immagine = true;
		break;
		
		case "xtribunale":
			title = "IL TRIBUNALE";
			
			img = "tribunale.png";
		
			desc = "";
		
			text = "";
			
			indizio = "TOMAN VIORICA …";
			
			immagine = true;
		break;
		
		case "xmercato":
			title = "IL MERCATO";
			
			img = "mercato.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Via Trieste 8, cognomi del campanello 3P lato destro";
			
			immagine = true;
		break;
		
		case "xpalazzo":
			title = "IL PALAZZO";
			
			img = "palazzo.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Sentiero laudato sii tappa 1. “Ammira, ascolta, rifletti ... !”";
			
			immagine = true;

		case "xmarconi":
			title = "LA RIUNIONE";
			
			img = "palazzo.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Targa commemorativa quarto cognome e nome colonna sinistra”";
			
			immagine = true;
		break;
		
		// ----- PER IL TUTORIAL ----- 
		
		case "start":
			title = "MY REBELLION"
			
			img = "";
			
			desc = "Un solo popolo";
			
			text = "Grazie a questa applicazione, la base pu\u00F2 comunicare direttamente con i soldati sul campo. In alto troverai sempre il titolo della missione, "+
					"(MY REBELLION per adesso), subito sotto la storia collegata a questa missione (ora \'un solo regno\') e al posto di questo testo troverai sempre "+
					"le indicazioni per portare a termine la missione. Infine sotto hai la possibilit\u00E0 di mettere una parola d'odrine che ti verr\u00E0 fornita "+
					"tramite suggerimento o come ricompensa e ti servir\u00E0 per avanzare alla missione successiva."
					
			indizio = "Per iniziare digita Pagliaccio";
			
			break;
			
		case "pagliaccio":
			alert("PASSWORD ERRATA");
			
			title = "ERRORE";
			
			img = "";
			
			desc = "Fregato";
			
			text = "Il messaggio che ti \u00E8 appena stato mostrato comparir\u00E0 quando digiti una password errata. Questa applicazione non salva i tuoi progressi "+
					"ma non preoccuparti: basta inserire l'ultima password che hai ottenuto e tornerai al punto di prima. Facciamo un esempio: con la password suggerita "+
					"qua sotto tornerai alla pagina precedente. Fai attenzione: il tutorial \u00E8 finito, da adesso inizia la missione!";
			
			indizio = "Scrivi start e premi OK, poi dopo non scrivere Pagliaccio ma inserisci la password che vi \u00E8 stata data sul biglietto";
			
			break;
			
		default:
			alert("PASSWORD ERRATA");
			
			title = "ERRORE";
			
			img = "notFound.png";
			
			desc = "Password errata. Riprova";
			
			text = "";
			
			indizio = "";
			
			immagine = true;
			
		 break;
	}
	if(title !== ""){
		titolo.textContent = "";
		write(title, titolo, 100);
	}
	if(desc !== ""){
		descrizione.textContent = "";
		descrizione.style.height = "max-content";
		setTimeout(restartCursor, 900, descrizione);
		setTimeout(write, 1000, desc, descrizione, 2000/desc.length);
	} else {
		descrizione.style.height = "0%";
	}
	
	if(text !== ""){
		testo.textContent = "";
		testo.style.height = "max-content";
		setTimeout(restartCursor, 3000, testo);
		setTimeout(write, 4000, text, testo, 4000/text.length);
	} else if(img !== ""){
		testo.textContent = "";
		setTimeout(function(){
			foto.style.height = "32%";
			foto2.style.height = "100%";
			foto2.style.visibility = "visible";
			foto.style.visibility = "visible";
			foto.style.backgroundImage = "url("+img+")";
		}, 1000);
		setTimeout(imageReveal, 1000);
	} else {
		testo.style.height = "0%";
	}
	
	let indizioTimer;
	let indizioCursor;
	if(immagine){
		indizioCursor = 2500;
		indizioTimer = 3000;
	}
	else {
		indizioCursor = 8500;
		indizioTimer = 9000;
	}
	
	if(indizio !== ""){
		inputIndizio.textContent = "";
		inputIndizio.style.height = "max-content";
		setTimeout(restartCursor, indizioCursor, inputIndizio);
		setTimeout(write, indizioTimer, indizio, inputIndizio, 2000/indizio.length);
	} else {
		inputIndizio.style.height = "0%";
	}
	
	
	let casellaTimer;
	if(immagine){
		casellaTimer = 5000;
	}
	else casellaTimer = 12000;
	
	setTimeout(function(){
		document.getElementById("casella").style.visibility = "visible";
	}, casellaTimer);
	
}

function write(text, id, time){
	var l=text.length;
	var current = 0;

	var write_text = function() {
	  id.textContent+=text[current];
	  if(current < l-1) {
		current++;
		setTimeout(function(){write_text()},time);
	  } else {
		id.textContent = id.textContent;
		setTimeout(endCursor, 0, id);
	  }
	}
	setTimeout(function(){write_text()},time);
}

function endCursor(id){
	id.classList.add('endCursor'); 
}

function restartCursor(id){
	id.classList.remove('endCursor'); 
}

function imageReveal(){
	let current = 100;
	let percent;
	
	var load_image = function() {
		percent = current + "%";
		if(current > 0){
			current--;
			document.getElementById("foto2").style.height = percent;
			setTimeout(function(){load_image()},15);
		}
		else {
			document.getElementById("foto2").style.height = percent;
		}
	}
	setTimeout(function(){load_image()},50);	
}

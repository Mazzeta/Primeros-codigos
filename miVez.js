const encuesta = document.querySelector(".por-ultimo");
const botónEnviar = document.getElementById("input-submit");
const wojak1 = document.createElement("IMG");
wojak1.src = 'multimedia/IntrntWojak-sinfondo-chato.png';
wojak1.classList.add("wojak-1")

const submitDiv = document.querySelector(".caja-submit");


botónEnviar.addEventListener("mouseover",quéFueEso)
function quéFueEso(){
	document.body.appendChild(wojak1);
	setTimeout(()=>{
		document.body.removeChild(wojak1);
	},217);
	botónEnviar.removeEventListener("mouseover",quéFueEso)
}


botónEnviar.addEventListener("click",()=>{
	submitDiv.classList.add("form-enviado");
	submitDiv.innerHTML = "<h2>¡Gracias por tu colaboración! Un beso en donde más gustes 💋</h2>";
})


//-----------------------		--------------------------		----------------------		---------------

let elementosOcultos = document.querySelectorAll("[hidden]");

// for(let i = 0; i < elementosOcultos.length; i++){

// 	 const mostrarElemento = () => elementosOcultos[i].removeAttribute("hidden");
// 	 setTimeout(mostrarElemento,i*1800-Math.random()*900);

// } HECHO ANTES DE CONOCER async()/await


console.log(typeof elementosOcultos)



const revelarTodo = async()=>{
	for(let i = 0; i < elementosOcultos.length; i++){
		let promesa = new Promise(resolve=>{
			setTimeout(()=>{resolve(elementosOcultos[i])},Math.random()*2100+4000);
		})

		let elemento = await promesa;
		elemento.removeAttribute("hidden");
	}
}



const canción = new Audio("../multimedia/quedirias.wav");


const manijaSubir = document.querySelector(".manija");
const interiorDelAuto = document.querySelector(".interior")

manijaSubir.addEventListener("click",()=>{
	manijaSubir.style.display = "none";
	interiorDelAuto.style.zIndex = 20
	interiorDelAuto.style.opacity = "1";
	revelarTodo();
	canción.play();
})

const linkVolver = document.getElementById("volver-link");

const lofi = new Audio("../multimedia/vaporwave-1.mp3");

const imagenTriste = document.createElement("IMG");
imagenTriste.src = "../multimedia/otro-dia-sin.jpg";
imagenTriste.classList.add("otro-dia");


linkVolver.addEventListener("mouseover",()=>{
	canción.pause();
	lofi.play();
	interiorDelAuto.appendChild(imagenTriste);
	document.querySelectorAll(".blureable").forEach(el=>el.style.filter = "blur(5px)");
	document.body.style.overflowY = "hidden";
});

linkVolver.addEventListener("mouseout",()=>{
	lofi.pause();
	canción.play();
	interiorDelAuto.removeChild(imagenTriste);
	imagenTriste.style.animation = "none";
	document.querySelectorAll(".blureable").forEach(el=>el.style.filter = "none");
	document.body.style.overflowY = "auto";
})
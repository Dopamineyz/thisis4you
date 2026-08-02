// ===========================================
// CARTA PARA ELLA
// script.js
// ===========================================

const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");

const intro = document.getElementById("intro");

const letter = document.getElementById("letter");

const text = document.getElementById("text");

const lily = document.getElementById("lily");

const finish = document.getElementById("finish");

const particles = document.getElementById("particles");

const petals = document.getElementById("petals");

const message = `Hay cosas que son más fáciles de escribir que de decir.

Aunque no llevamos mucho tiempo hablando y todo ha sido de forma virtual, disfruto mucho compartir contigo. Entre conversaciones, risas y esos pequeños momentos, me he dado cuenta de que me gusta la persona que estoy empezando a conocer.

No quiero apresurar nada ni ponerle un nombre a algo que apenas comienza. Lo único que quisiera es tener la oportunidad de seguir conociéndote, descubrir poco a poco quién eres, qué te hace sonreír, qué sueñas y qué cosas hacen que seas tú.

También quiero ser sincero contigo respecto a mis intenciones. No me acerco por simple curiosidad ni por llenar un vacío. Me acerco porque creo que eres una persona que vale la pena conocer y porque, si el tiempo lo permite, me gustaría construir algo basado en la confianza, el respeto y la honestidad.

No espero que sientas lo mismo ahora, ni quiero que esta carta te haga sentir incómoda. Solo quería que supieras que, de todas las personas con las que podría hablar, eres una de las que más me despierta las ganas de seguir descubriendo quién es realmente.

Gracias por dedicar un poco de tu tiempo a leer esto. Pase lo que pase, espero que podamos seguir compartiendo esos pequeños momentos que hacen un poco más bonito el día.

Con cariño.

Angel 🤍`;


// ===========================================
// PARTÍCULAS
// ===========================================

for(let i=0;i<40;i++){

    const p=document.createElement("div");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(8+Math.random()*10)+"s";

    p.style.animationDelay=(Math.random()*10)+"s";

    p.style.opacity=Math.random()*0.5;

    particles.appendChild(p);

}


// ===========================================
// ABRIR SOBRE
// ===========================================

envelope.addEventListener("click",()=>{

    envelope.style.pointerEvents="none";

    flap.classList.add("open");

    setTimeout(()=>{

        intro.classList.add("hide");

    },800);

    setTimeout(()=>{

        letter.classList.add("show");

        typeWriter();

    },1200);

});


// ===========================================
// MAQUINA DE ESCRIBIR
// ===========================================

let index=0;

function typeWriter(){

    if(index<message.length){

        text.innerHTML+=message.charAt(index);

        letter.scrollTop=letter.scrollHeight;

        index++;

        setTimeout(typeWriter,22);

    }

    else{

        lily.classList.add("show");

        finish.style.display="block";

        finish.style.animation="fadeIn .8s";

    }

}


// ===========================================
// BOTON FINAL
// ===========================================

finish.onclick=()=>{

    finish.disabled=true;

    finish.innerHTML="💜 Gracias por leer";

    rainPetals();

}


// ===========================================
// PETALOS
// ===========================================

function rainPetals(){

    for(let i=0;i<60;i++){

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌸";

        petal.style.left=Math.random()*100+"vw";

        petal.style.fontSize=(16+Math.random()*18)+"px";

        petal.style.animationDuration=(4+Math.random()*4)+"s";

        petals.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },8000);

    }

}

// =============================
// TEXTO DE LA CARTA
// =============================

const message = `Quería decirte algo.

Aunque no llevamos mucho tiempo hablando y todo ha sido de forma virtual, disfruto mucho compartir contigo. Entre conversaciones, risas y esos pequeños momentos, me he dado cuenta de que me gusta la persona que estoy empezando a conocer.

No quiero apresurar nada ni ponerle un nombre a algo que apenas comienza. Lo único que quisiera es tener la oportunidad de seguir conociéndote, descubrir poco a poco quién eres, qué te hace sonreír, qué sueñas y qué cosas hacen que seas tú.

También quiero ser sincero contigo respecto a mis intenciones. No me acerco por simple curiosidad ni por llenar un vacío. Me acerco porque creo que eres una persona que vale la pena conocer y porque, si el tiempo lo permite, me gustaría construir algo basado en la confianza, el respeto y la honestidad.

No espero que sientas lo mismo ahora, ni quiero que esta carta te haga sentir incómoda. Solo quería que supieras que, de todas las personas con las que podría hablar, eres una de las que más me despierta las ganas de seguir descubriendo quién es realmente.

Gracias por dedicar un poco de tu tiempo a leer esto. Pase lo que pase, espero que podamos seguir compartiendo esos pequeños momentos que hacen un poco más bonito el día.

Con cariño, Angel (Your friendly neighbour Spiderman)🤍`;

const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");
const text = document.getElementById("text");
const openButton = document.getElementById("openButton");
const finish = document.getElementById("finish");
const lily = document.getElementById("lily");
const lid = document.querySelector(".lid");


// =============================
// PARTÍCULAS
// =============================

for(let i=0;i<35;i++){

    const p=document.createElement("div");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDelay=Math.random()*10+"s";

    p.style.animationDuration=8+Math.random()*8+"s";

    p.style.opacity=Math.random()*0.5;

    document.getElementById("particles").appendChild(p);

}


// =============================
// ABRIR CARTA
// =============================

openButton.onclick=()=>{

    lid.style.transform="rotateX(180deg)";

    setTimeout(()=>{

        intro.style.opacity=0;
        intro.style.pointerEvents="none";

    },800);

    setTimeout(()=>{

        letterSection.style.opacity=1;
        letterSection.style.pointerEvents="all";

        typeWriter();

    },1400);

}



// =============================
// EFECTO MAQUINA
// =============================

let i=0;

function typeWriter(){

    if(i<message.length){

        text.innerHTML+=message.charAt(i);

        i++;

        setTimeout(typeWriter,28);

    }else{

        finish.style.display="block";

        lily.style.opacity=.28;

    }

}



// =============================
// BOTON FINAL
// =============================

finish.onclick=()=>{

    createPetals();

    finish.innerHTML="💜 Gracias por dedicarme un momento.";

}



// =============================
// PETALOS
// =============================

function createPetals(){

    for(let i=0;i<45;i++){

        const petal=document.createElement("div");

        petal.innerHTML="🌸";

        petal.style.position="fixed";

        petal.style.left=Math.random()*100+"vw";

        petal.style.top="-50px";

        petal.style.fontSize=(18+Math.random()*20)+"px";

        petal.style.opacity=Math.random();

        petal.style.transition="transform 6s linear";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.style.transform=
            `translate(${Math.random()*300-150}px,110vh) rotate(${Math.random()*700}deg)`;

        },50);

        setTimeout(()=>{

            petal.remove();

        },6500);

    }

}

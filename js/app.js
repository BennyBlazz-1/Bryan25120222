// BOTÓN HERO
document.getElementById("exploreBtn").addEventListener("click",()=>{
document.getElementById("cars").scrollIntoView({behavior:"smooth"});
});

// ANIMACIÓN CARDS
const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
cards.forEach(card=>{
if(card.getBoundingClientRect().top < window.innerHeight - 100){
card.classList.add("show");
}
});
});

// FORMULARIO
const form=document.getElementById("contactForm");
const msg=document.getElementById("formMsg");

form.addEventListener("submit",e=>{
e.preventDefault();

const name=nameInput=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();

if(!name||!email||!message){
msg.style.color="red";
msg.textContent="Completa todos los campos.";
return;
}

msg.style.color="lime";
msg.textContent="Mensaje enviado correctamente.";
form.reset();
});

// DATOS REALES DE AUTOS
const carData=[
{
name:"Ferrari F8 Tributo",
img:"assets/ferrari.jpg",
info:"Motor V8 biturbo de 3.9L, 720 HP, 0-100 km/h en 2.9s, velocidad máxima 340 km/h. Tracción trasera y transmisión de doble embrague de 7 velocidades."
},
{
name:"Lamborghini Huracán EVO",
img:"assets/lamborghini.jpg",
info:"Motor V10 atmosférico de 5.2L, 640 HP, 0-100 km/h en 2.9s, velocidad máxima 325 km/h. Sistema de tracción total con aerodinámica activa."
},
{
name:"Bugatti Chiron",
img:"assets/bugatti.jpeg",
info:"Motor W16 quad-turbo de 8.0L, 1500 HP, 0-100 km/h en 2.4s, velocidad máxima limitada a 420 km/h. Lujo extremo con ingeniería de hiperauto."
},
{
name:"Porsche 911 Turbo S",
img:"assets/porsche.jpg",
info:"Motor bóxer biturbo de 3.8L, 650 HP, 0-100 km/h en 2.7s, velocidad máxima 330 km/h. Tracción integral con precisión alemana."
},
{
name:"McLaren 720S",
img:"assets/mclaren.jpg",
info:"Motor V8 biturbo 4.0L, 720 HP, 0-100 km/h en 2.8s, velocidad máxima 341 km/h. Chasis de fibra de carbono ultraligero."
},
{
name:"Aston Martin DBS Superleggera",
img:"assets/astonmartin.jpg",
info:"Motor V12 biturbo 5.2L, 715 HP, 0-100 km/h en 3.4s, velocidad máxima 340 km/h. Lujo británico y potencia extrema."
},
{
name:"Chevrolet Corvette Z06",
img:"assets/corvette.avif",
info:"Motor V8 5.5L atmosférico, 670 HP, 0-100 km/h en 2.6s, velocidad máxima 315 km/h. ADN de pista americano."
},
{
name:"Nissan GT-R Nismo",
img:"assets/gtr.jpg",
info:"Motor V6 biturbo 3.8L, 600 HP, 0-100 km/h en 2.8s, velocidad máxima 315 km/h. Tecnología japonesa de alto rendimiento."
},
{
name:"Koenigsegg Jesko",
img:"assets/jesko.jpg",
info:"Motor V8 biturbo 5.0L, hasta 1600 HP con biocombustible, 0-100 km/h en 2.5s. Diseñado para ser uno de los autos más rápidos jamás creados."
},
{
name:"Pagani Huayra",
img:"assets/pagani.jpg",
info:"Motor V12 biturbo desarrollado por AMG, 730 HP, 0-100 km/h en 3.2s, velocidad máxima 383 km/h. Arte italiano sobre ruedas."
},
{
name:"Audi R8 V10 Performance",
img:"assets/audir8.jpg",
info:"Motor V10 atmosférico 5.2L, 620 HP, 0-100 km/h en 3.1s, velocidad máxima 331 km/h. Elegancia alemana con sonido legendario."
},
{
name:"Rimac Nevera",
img:"assets/rimac.jpg",
info:"Cuatro motores eléctricos, 1914 HP, 0-100 km/h en 1.85s, velocidad máxima 412 km/h. El hiperauto eléctrico más rápido del mundo."
}
];

// MODAL
const modal=document.getElementById("carModal");
const modalImg=document.getElementById("modalImg");
const modalTitle=document.getElementById("modalTitle");
const modalInfo=document.getElementById("modalInfo");
const closeModal=document.getElementById("closeModal");

// CLICK EN CARDS
cards.forEach((card,index)=>{
card.addEventListener("click",()=>{
modal.style.display="flex";
modalImg.src=carData[index].img;
modalTitle.textContent=carData[index].name;
modalInfo.textContent=carData[index].info;
});
});

// CERRAR MODAL
closeModal.addEventListener("click",()=>modal.style.display="none");

modal.addEventListener("click",e=>{
if(e.target===modal) modal.style.display="none";
});

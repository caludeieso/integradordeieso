// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 0.2;
let descuentoTrainee= 0.5;
let descuentoJunior= 0.85;
// Elementos en variables
let nombre= document.getElementById("nombre");
let apellido= document.getElementById("apellido");
let mail= document.getElementById("mail");



function total_a_pagar() { 
  const valorTicket = 200;
  let cantidadT= document.getElementById("cantidadTickets").value;
  let categoria= document.getElementById("categoriaSelect").value;
  var resumen=0 
  //validaciones
  if (nombre.value==="" || apellido.value==="" || mail.value===""||categoria<"0") {
       alert("Completar campos obligatorios"); 
       document.getElementById("obligatorio").innerText="*Completar campos requeridos" 
       return resumen=0;
  }
  
  const emailValido = mail => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }
     if(!emailValido(mail.value))
     {
        alert("Escribir bien el mail...");
        return ;
     }

  //calculo

    if (categoria==0){
     resumen=valorTicket*cantidadT; 
    } 
    if (categoria==1){
       resumen=valorTicket*descuentoEstudiante*cantidadT;
    } 
    if (categoria==2){
        resumen=valorTicket*descuentoTrainee*cantidadT;   
    } 
    if (categoria==3){
      resumen=valorTicket*descuentoJunior*cantidadT;   
    } 
  
   document.getElementById("totalResumen").innerText=resumen;
   if (resumen>0) {
    document.getElementById("obligatorio").innerText="" 
   }
   
}

btnResumen.addEventListener("click",total_a_pagar);

function borrar() {
 document.getElementById("nombre").value="";
 document.getElementById("apellido").value="";
 document.getElementById("mail").value="";
 document.getElementById("cantidadTickets").value="";
 document.getElementById("categoriaSelect").value="";
document.getElementById("totalResumen").innerText="";
}

document.getElementById("btnBorrar").addEventListener("click",borrar);





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
let cantidadT= document.getElementById("cantidadTickets").value;
let categoria= document.getElementById("categoriaSelect");


function total_a_pagar() {  
   
    if (categoria.value==0){
     resumen=valorTicket*cantidadT;
      return ;  
    } 
    if (categoria.value==1){
       resumen=valorTicket*descuentoEstudiante*cantidadT;
      return ;  
    } 
    if (categoria.value==2){
        resumen=valorTicket*descuentoTrainee*cantidadT;
      return ;  
    } 
    if (categoria.value==3){
      resumen=valorTicket*descuentoJunior*cantidadT;
      return ;  
    } 
    
  return document.getElementById("totalResumen").value=resumen;
   
}

btnResumen.addEventListener("click",total_a_pagar);




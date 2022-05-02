
function fnEnviar(){
    /*Declarando variables */
    var vNombre = vApellido = vCorreo = vInstitucion = "";


    /*Asignando variables */
    vNombre = document.getElementById("idNombre").value;
    vApellido = document.getElementById("idApellido").value;
    vCorreo = document.getElementById("idCorreo").value;
    vInstitucion = document.getElementById("idInstitucion").value;
    


    /*Insertando datos a la vista html */
    document.getElementById("sNombre").innerHTML = vNombre;
    document.getElementById("sApellido").innerHTML = vApellido;
    document.getElementById("sCorreo").innerHTML = vCorreo;
    document.getElementById("sInstitucion").innerHTML = vInstitucion;

    if(validarcampos()==true){
        var Modalhtml = document.getElementById("mRegistro"); /*se llama al elemento*/
        var miModal = new bootstrap.Modal(Modalhtml); /*se le tansforma al estilo bootstrap a la variable llamada*/
        miModal.show(); /*para mostrar la nueva variable*/
    }/*else{
        alert("Tu formulario no esta completo")
    }*/
    
    
    console.log("Nombre: "+vNombre 
    + " Apellido: "+vApellido 
    + " Correo: "+vCorreo
    + "Institución :"+vInstitucion);
}
function validarcampos() {
    /*debugger*/ /*para depurar errores*/
    var valor=true; /*true es el valor por defecto, en caso se cumpla la condición de los ifs*/
    var vNombre = vApellido = vCorreo = vInstitucion = "";
    /*Asignando variables */
    vNombre = document.getElementById("idNombre").value;
    vApellido = document.getElementById("idApellido").value;
    vCorreo = document.getElementById("idCorreo").value;
    vInstitucion = document.getElementById("idInstitucion").value;
    //objetos
    var objNombre = document.getElementById("nombrejs")
    var objApellido = document.getElementById("apellidojs")
    var objCorreo = document.getElementById("correojs")
    var objInst = document.getElementById("instjs")

    if(vNombre.trim().length == 0){  /*length=largo de string de texto incluye espacios*//*trim es para que no cuente los espacios*/
        valor = false;
        /*alert('No has escrito tu nombre');*/
        /*return;*/
        /*var errorNombre = document.getElementById("nombrejs")
        errorNombre.style.display="block"*/
        objNombre.style.display="block";
        document.getElementById("nombrejs").focus()
    }else{
        /*var errorNombre = document.getElementById("nombrejs")
        errorNombre.style.display="none"*/
        objNombre.style.display="none"
    }

    if(vApellido.trim().length == 0){
        valor = false;
        /*alert('No has escrito tu apellido');*/
        /*return;*/
        objApellido.style.display="block"
        document.getElementById("apellidojs").focus()
    }else{
        objApellido.style.display="none"

    if(vCorreo.trim().length == 0){
        valor = false;
        /*alert('No has escrito tu correo');*/
        /*return;*/
        objCorreo.style.display="block"
        document.getElementById("correojs").focus()
    }else{
        objCorreo.style.display="none"

    if(vInstitucion.trim().length == 0){
        valor = false;
        /*alert('No has escrito tu institución');*/
        /*return;*/
        objInst.style.display="block"
        document.getElementById("correojs").focus()
    }else{
        objInst.style.display="none"

    return valor;
}


function nombreFuncion2(valor){
    //codigo para procesar ese valor
}

function nombreFuncion3(valor){
    //codigo para procesar ese valor
    valor = "Estes es el valor: "+valor
    return valor;
}


function nombreFuncion4(valor){
    //codigo para procesar ese valor
    valor = "Profe Necesito Ayuda, no entiendo nada!!"    
}
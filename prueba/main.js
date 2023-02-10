'use strict'

window.addEventListener('load', function(){

    let formulario = document.querySelector("#formulario");
    let box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener("submit", function(){
        console.log("Evento submit capturado");

        let estado = document.querySelector(".form-control").value; 
        let enunciado = document.querySelector("#enunciado").value;

        if(estado.trim() == null || estado.trim().length == 0){
            alert("El estado no es correcto");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(enunciado.trim() == null || enunciado.trim().length == 0){
            alert("El enunciado no es válido");
            return false;
        }

        box_dashed.style.display = "block";

        let p_state = document.querySelector("#p_estado span");
        let p_enun = document.querySelector("#p_enunciado span");

        p_state.innerHTML = estado;
        p_enun.innerHTML = enunciado;

        let btn_delete = document.querySelector("#btn-action-delete");
        let error_div = document.querySelector(".error-message");

        btn_delete.addEventListener('click', () => {
            error_div.innerHTML = "";

            if (btn_delete === "click") {
                error_div.innerHTML = "";
            } else {
                p_state.remove();
                p_enun.remove();
                error_div.innerHTML = "La pregunta introducida ha sido eliminada";
                error_div.style = "color: red";
            }
        });
    });
});
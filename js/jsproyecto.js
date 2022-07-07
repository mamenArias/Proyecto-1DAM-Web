$(document).ready(main);
//Animación menú responsive
var contador = 1;
/* Nos va a establecer un contador a 1. Cuando hagamos click en el botón del menú responsive, va comprobar que este contador esté a 1, y va a hacer que el
menú aparezca desde la izquierda, poniendo además el contador a 0. Entonces, al volver a darle al botón, ocultará el menú por fuera del viewport de la pantalla.*/
function main() {
    $('.menu_bar').click(function() {
        //$('.menuResponsive').toggle();

        if (contador == 1) {
            $('.menuResponsive').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.menuResponsive').animate({
                left: '-100%'
            });
        }
    });
}

/*Botón del menú lateral:
Nos va a mostrar el menú lateral que tenemos por defecto como display:none cuando le demos al elemento botonDesplegable.*/
var dropdown = document.getElementsByClassName("botonDesplegable");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

//Animación de las imágenes para abrirse a pantalla completa cuando hacemos click
$(document).ready(function() {
    //Al hacer clic en cualquier img ejecutamos la acción
    $('.content img').click(function() {
        //Capturamos el src de la img
        var postimg = $(this).attr('src');
        //Agregamos el src a una href simbólico
        $('#verimagenes').attr('href', postimg);
        //Hacemos clic en el enlace para activar el visor
        $('#verimagenes').click();
    });

});

const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //convierte el HTML con la clase "dark"
    switchButton.classList.toggle('active'); //convierte el botón del html que aplica el modo oscuro con la clase "active"
});

const switchButton2 = document.getElementById('switch2');

switchButton2.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton2.classList.toggle('active');
});
/*Esta función nos va a borrar el usuario que se haya registrado, para desconectar la sesión y recargará la página*/
function cerrarSesion() {
    if (typeof(Storage) !== "undefined") {
        if (confirm("¿Desea Cerrar Sesión?")) {
            sessionStorage.removeItem("user");
            location.reload();
        } else {

        }

    } else {
        alert("Este navegador no soporta web storage...");
    }

    return false;
}

/*Esta función va a leer el XML, y luego llamará a miFuncion*/
function leerXML() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            miFuncion(this);
        }
    };
    xhr.open("GET", "registrados.xml", true);
    xhr.send();

}

/*Con esta función se va a comprobar que el usuario y la clave introducidas desde el form del login coincidan con el nombre y la clave de los datos existentes
en el XML. Si es así, se van a almacenar estos datos en sessionStorage.*/
function miFuncion(xml) {

    var i;
    var nombre;
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("usuario");
    loginAceptado = false;

    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == document.getElementById("user").value) {
            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == document.getElementById("pass").value) {
                loginAceptado = true;
                nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                pass = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
                if (typeof(Storage) !== "undefined") {
                    // Código cuando Storage es compatible
                    sessionStorage.setItem("user", nombre);
                    sessionStorage.setItem("clave", pass);
                } else {
                    alert("El navegador no es compatible con SessionStorage.")
                        // Código cuando Storage NO es compatible
                }
                break;

            }
        }
    }
    /*Si el usuario y la contraseña son correctos, aparecerá un alert indicándolo y se mostrarán todo lo que está oculto.
    Si no es correcto, aparecerá otro alert indicando que algunos de los dos campos se han introducido incorrectamente.*/
    if (loginAceptado == true) {
        window.alert("Bienvenid@ " + nombre);
        $(".loginBoton").hide();
        $(".login").hide();
        $(".logout").show();
        document.getElementById("conectado").innerHTML = "| Bienvenid@ " + sessionStorage.getItem("user") + " |";
        $(".conectado").show();
        $(".oculto").show();
        //location.reload();
        //window.history.go(-1);

    } else {
        window.alert("Usuario o contraseña incorrectos");
    }


}


/*Al cargar la pantalla, el botón de desconectar y las cosas ocultas no se van a mostrar, hasta que se loguee el usuario correctamente.*/
window.onload = function() {
    $(".loginBoton").show();
    $(".logout").hide();
    $(".conectado").hide();
    $(".oculto").hide();

    comprobarLogin();
}

/*Esta función va a comprobar si hay algún usuario cada vez que se cargue una página*/
function comprobarLogin() {
    if (sessionStorage.getItem("user").length > 0) {
        //$(".loginBoton").hide();
        $(".login").hide();
        $(".logout").show();
        $("#conectado").show();
        $(".oculto").show();
    }
}
//document.getElementById("conectado").innerHTML = "| Bienvenid@ " + sessionStorage.getItem("user") + " |";
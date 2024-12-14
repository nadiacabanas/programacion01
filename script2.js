function validarRegistro() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var curso = document.getElementById("curso").value;
    var division = document.getElementById("division").value;
    var modalidad = document.getElementById("modalidad").value;
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Validar que todos los campos requeridos estén llenos
    if (nombre === "" || apellido === "" || direccion === "" || telefono === "" ||
        correo === "" || curso === "" || division === "" || modalidad === "" ||
        usuario === "" || contrasena === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Evita el envío del formulario
    }

    // Validar el formato del correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Si todo es válido, se permite el envío del formulario
    alert("Registro exitoso.");
    return true;
}

function validarFormulario() {
    // Obtener los valores de los campos de usuario y contraseña
    var usuario = document.getElementById("username").value;
    var contraseña = document.getElementById("password").value;

    // Validar que el campo usuario no esté vacío
    if (usuario === "") {
        alert("Por favor, ingrese su nombre de usuario.");
        return false; // Evita el envío del formulario
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (contraseña.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false; // Evita el envío del formulario
    }

    // Si se cumplen, permite enviar el formulario
    return true;
}

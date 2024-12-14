// Simulación de datos
const alumnos = ["Ana Pérez", "Carlos Gómez", "Lucía Martínez", "Juan Torres"];
const personal = ["Profesor José López", "Directora María González", "Secretaria Laura Hernández"];

// Renderizar lista de alumnos
const alumnosLista = document.getElementById('alumnos-lista');
alumnos.forEach(alumno => {
    const item = document.createElement('p');
    item.textContent = alumno;
    alumnosLista.appendChild(item);
});

// Renderizar lista de personal académico
const personalLista = document.getElementById('personal-lista');
personal.forEach(persona => {
    const item = document.createElement('p');
    item.textContent = persona;
    personalLista.appendChild(item);
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

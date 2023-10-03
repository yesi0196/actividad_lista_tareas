// Array para almacenar las tareas
const tasks = [];

// Función para agregar una tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const tareaText = nuevaTareaInput.value.trim();
    const estadoTarea = document.getElementById("state").value;

    if (tareaText !== "") {
        tasks.push({ text: tareaText, state: estadoTarea });
        nuevaTareaInput.value = "";
        mostrarTareas();
    }
}

// Función para mostrar tareas según su estado
function mostrarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";

    tasks.forEach((tarea, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = tarea.text;

        listItem.addEventListener("click", () => {
            toggleEstadoTarea(index);
            mostrarTareas();
        });

        listaTareas.appendChild(listItem);
    });
}

// Event listener para los botones "Mostrar Completadas" y "Mostrar Pendientes"
document.getElementById("mostrarCompletadas").addEventListener("click", () => {
    mostrarTareasFiltradas('completed');
});

document.getElementById("mostrarPendientes").addEventListener("click", () => {
    mostrarTareasFiltradas('pending');
});

// Función para mostrar tareas filtradas por estado
function mostrarTareasFiltradas(filtro) {
    mostrarTareas();
    const listaTareas = document.getElementById("listaTareas");
    const items = listaTareas.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const estadoTarea = tasks[i].state;

        if (filtro === 'completed' && estadoTarea !== 'completed') {
            item.style.display = "none";
        } else if (filtro === 'pending' && estadoTarea !== 'pending') {
            item.style.display = "none";
        }
    }
}

// Inicialmente, muestra todas las tareas
mostrarTareas();


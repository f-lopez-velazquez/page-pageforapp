// Simulación de carga para el splash screen
window.onload = function() {
    const progressBar = document.querySelector(".progress-bar-inner");
    progressBar.style.width = "100%"; // Simula el avance completo en 3 segundos
    
    setTimeout(() => {
        document.querySelector(".progress-bar").style.display = "none"; // Oculta la barra de progreso
        document.getElementById("start-button").style.display = "inline-block"; // Muestra el botón "Comenzar" con efecto "pop"
    }, 3000);
};

// Función para iniciar la app con transición
function startApp() {
    document.getElementById("splash-screen").style.opacity = "0"; // Transición de desvanecimiento
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.opacity = "1";
        document.getElementById("main-content").style.display = "block";
    }, 500); // Espera a que termine el desvanecimiento
}

// Función para mostrar la pantalla de información
function showInfo() {
    document.getElementById("main-content").style.opacity = "0"; // Desvanecer menú principal
    setTimeout(() => {
        document.getElementById("main-content").style.display = "none";
        document.getElementById("info-content").style.opacity = "1";
        document.getElementById("info-content").style.display = "block";
    }, 500);
}

// Contenido de las secciones con eventos de clic para mostrar mensaje en la misma app
const sections = {
    embarazo: `
        <h3>Embarazo</h3>
        <ul>
            <li onclick="showMessage(this)">Desarrollo del bebé</li>
            <li onclick="showMessage(this)">Consultas prenatales</li>
            <li onclick="showMessage(this)">Estimulación en el embarazo</li>
            <li onclick="showMessage(this)">Relaciones sexuales</li>
            <li onclick="showMessage(this)">Signos y síntomas de la mujer</li>
        </ul>
    `,
    parto: `
        <h3>Parto</h3>
        <ul>
            <li onclick="showMessage(this)">Acompañamiento durante el parto</li>
            <li onclick="showMessage(this)">Aromaterapia</li>
            <li onclick="showMessage(this)">Musicoterapia</li>
            <li onclick="showMessage(this)">Técnicas de relajación</li>
            <li onclick="showMessage(this)">Masoterapia</li>
        </ul>
    `,
    puerperio: `
        <h3>Puerperio</h3>
        <ul>
            <li onclick="showMessage(this)">Cuidados post parto y cesárea</li>
            <li onclick="showMessage(this)">Cuidados del RN</li>
            <li onclick="showMessage(this)">Primeros auxilios</li>
            <li onclick="showMessage(this)">Baño</li>
        </ul>
    `,
    "para-ti-papa": `
        <h3>Para ti papá</h3>
        <ul>
            <li onclick="showMessage(this)">Estado emocional de los hombres</li>
            <li onclick="showMessage(this)">Signos y síntomas de los hombres</li>
        </ul>
    `
};

// Función para mostrar una sección con transición
function showSection(section) {
    document.getElementById("main-content").style.opacity = "0"; // Desvanecer menú principal
    setTimeout(() => {
        document.getElementById("section-inner-content").innerHTML = sections[section];
        document.getElementById("main-content").style.display = "none";
        document.getElementById("section-content").style.opacity = "1";
        document.getElementById("section-content").style.display = "block";
    }, 500);
}

// Función para regresar al menú principal con transición
function goBack() {
    const currentSection = document.querySelector("section[style*='display: block']");
    currentSection.style.opacity = "0";
    setTimeout(() => {
        currentSection.style.display = "none";
        document.getElementById("main-content").style.opacity = "1";
        document.getElementById("main-content").style.display = "block";
        clearMessage(); // Limpia el mensaje al regresar
    }, 500);
}

// Función para mostrar el mensaje en la misma sección
function showMessage(element) {
    const messageBox = document.getElementById("message-box");
    if (!messageBox) {
        const newMessageBox = document.createElement("div");
        newMessageBox.id = "message-box";
        newMessageBox.className = "message-box";
        newMessageBox.textContent = `Estamos trabajando en: ${element.textContent}`;
        document.getElementById("section-inner-content").appendChild(newMessageBox);
    } else {
        messageBox.textContent = `Estamos trabajando en: ${element.textContent}`;
    }
}

// Función para limpiar el mensaje
function clearMessage() {
    const messageBox = document.getElementById("message-box");
    if (messageBox) {
        messageBox.remove();
    }
}

// Colores para el fondo 
const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"]; 
let colorIndex = 0; 

// Datos de los equipos
const teams = [ 
    {
        name: "Akiton",
        members: [
            {
                name: "Jose Antonio Andrade Serrato",
                photo: "./fotos/FotoAntonio.png",
                age: 21,
                desc: "Estudiante de 8vo semestre en la carrera de Ing. En Sistemas Computacionales. <br>Tiene un gusto por la computación y la programación, sin embargo le apasiona la mecánica, las finanzas, la política y el deporte. Es una persona a la que le gusta ser un factor de cambio en la sociedad que lo rodea y motivar a nuevas personas interesadas en cambiar a su comunidad, pues piensa que si todos ponemos de nuestro apoyo y disciplina podemos lograr grandes cosas."
            },
            {
                name: "Akira Jaqueline Joya Hernandez",
                photo: "./fotos/FotoAkira.jpeg",
                age: 20,
                desc: "Estudiante de 6to semestre de la carrera de Ingeniería en Sistemas Computacionales. <br>Tiene un gusto por la programación y las bases de datos, sin embargo cuenta con más gustos en su vida personal como lo son cocinar y experimentar en ese ámbito. Es una persona amigable, que se preocupa por los demás."
            }
        ]
    },
    {
        name: "Carmen y Eduardo",
        members: [
            {
                name: "Carmen Anel Ramirez Arreguin",
                photo: "./fotos/foto_carmen.jpg",
                age: 21,
                desc: "Descripción de Carmen - Integrante del segundo equipo."
            },
            {
                name: "Hector Eduardo Granados Hernandez",
                photo: "./fotos/FotoEduardo.png",
                age: 22,
                desc: "Descripción de Eduardo - Integrante del segundo equipo."
            }
        ]
    },
    {
        name: "Gael y Luis",
        members: [
            {
                name: "Gael Ricardo Mendoza Ballardo",
                photo: "./fotos/foto_gael.jpg",
                age: 21,
                desc: "Desarrollador web con experiencia en el diseño y desarrollo de aplicaciones orientadas a la gestión de datos. Manejo tecnologías de programación y bases de datos para crear soluciones funcionales y eficientes. Tengo experiencia trabajando con consultas SQL, desarrollo backend y construcción de interfaces para sistemas administrativos, aplicando buenas prácticas de programación y resolución de problemas."
            },
            {
                name: "Luis Jesus Lopez Nanez",
                photo: "./fotos/foto_luis.jpg",
                age: 20,
                desc: "Estudiante de Ing. Sistemas computacionales, con formacion basica en desarrollo de base de datos.Con un gusto por Gael."
            }
        ]
    }
];

let teamIndex = 0; 

// Función para actualizar el equipo mostrado
function updateTeam() {
    const currentTeam = teams[teamIndex];
    
    // Actualizar nombre del equipo
    document.getElementById("team-title").textContent = "Equipo: " + currentTeam.name;
    
    // Actualizar miembro 1
    document.getElementById("member-1-name").textContent = currentTeam.members[0].name;
    document.getElementById("member-1-photo").src = currentTeam.members[0].photo;
    document.getElementById("member-1-photo").alt = "Foto de " + currentTeam.members[0].name;
    document.getElementById("member-1-desc").innerHTML = 
        "<strong>" + currentTeam.members[0].name.split(" ")[0] + ", " + currentTeam.members[0].age + " años</strong> <br>" + 
        currentTeam.members[0].desc;
    
    // Actualizar miembro 2
    document.getElementById("member-2-name").textContent = currentTeam.members[1].name;
    document.getElementById("member-2-photo").src = currentTeam.members[1].photo;
    document.getElementById("member-2-photo").alt = "Foto de " + currentTeam.members[1].name;
    document.getElementById("member-2-desc").innerHTML = 
        "<strong>" + currentTeam.members[1].name.split(" ")[0] + ", " + currentTeam.members[1].age + " años</strong> <br>" + 
        currentTeam.members[1].desc;
}

// Botón cambio de color 
document.getElementById("colorButton").addEventListener("click", () => { 
    document.body.style.backgroundColor = colors[colorIndex]; 
    colorIndex = (colorIndex + 1) % colors.length; 
}); 

// Botón cambio de equipo 
document.getElementById("switchButton").addEventListener("click", () => { 
    teamIndex = (teamIndex + 1) % teams.length; 
    updateTeam();
});

// Cargar el primer equipo al iniciar
updateTeam();
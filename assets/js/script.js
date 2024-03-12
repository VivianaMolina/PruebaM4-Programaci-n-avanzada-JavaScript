//1. Crear las clases representadas en el diagrama implementando la herencia indicada.
//5. Dividir el código en módulos (2 Puntos)
import Animal from './animal.js';
import Leon from './leon.js';
import Lobo from './lobo.js';
import Oso from './oso.js';
import Serpiente from './serpiente.js';
import Aguila from './aguila.js';

var tableAnimal = [];
var srcAnimal = "";

//4. Realizar por lo menos una función autoejecutable IIFE.
const readAnimalJson = (() => {
    const url = '../../animales.json';
    return {
        animalAttribs: async () => {
            // bloque Try
            try {
                const response = await fetch(url); //método fetch mediante la instrucción await
                const data = await response.json();
                return data;
            } catch (error) { // bloque Catch
                console.error('Error al obtener datos:', error);
                throw error; // Manejamos el error y lo propagamos
            }

        }
    }
})();

//3. Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales.
const animalSelected = document.querySelector('#animal');
const previewImg = document.querySelector('#preview');

animalSelected.addEventListener('change', async () => {

    const { animales } = await readAnimalJson.animalAttribs();
    let tipoAnimal = animalSelected.value;

    animales.forEach(element => {
        if (element.name === tipoAnimal) {
            var img = document.createElement("img");
            img.setAttribute("src", `assets/imgs/${element.imagen}`);
            previewImg.appendChild(img);
            srcAnimal = `assets/imgs/${element.imagen}`;
        }
    });
});

//2. Crear las instancias de las clases utilizando los datos del formulario.
const botonAgregar = document.getElementById('btnRegistrar');

botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();

    let nombre = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value
    let comentarios = document.getElementById('comentarios').value;
    let img = srcAnimal;
    // let img = document.images[0].src;

    //7. Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla. (Opcional)
    if (nombre != '' && edad != '' && comentarios != '' && img != '') {
        switch (nombre) {
            case "Leon":
                let leon = new Leon(nombre, edad, img, comentarios);
                tableAnimal.push(leon);
                break;
            case "Lobo":
                let lobo = new Lobo(nombre, edad, img, comentarios);
                tableAnimal.push(lobo);
                break;
            case "Oso":
                let oso = new Oso(nombre, edad, img, comentarios);
                tableAnimal.push(oso);
                break;
            case "Serpiente":
                let serpiente = new Serpiente(nombre, edad, img, comentarios);
                tableAnimal.push(serpiente);
                break;
            case "Aguila":
                let aguila = new Aguila(nombre, edad, img, comentarios);
                tableAnimal.push(aguila);
                break;
            default:
                alert("Animal no valido");
        }

        showRegisteredAnimals();
        inicializaForm();

    } else {
        alert('Debe seleccionar todos los datos para agregar el animal')
    };

})

// 6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario.
const showRegisteredAnimals = () => {
    let divAnimal = document.getElementById('Animales');
    divAnimal.innerHTML = "";

    tableAnimal.forEach(element => {
        console.log(element);
        let cardAnimal = `<div class="card ml-4">
            <img src=${element.img} class="card-img-top" alt="...">
        </div>`;

        divAnimal.innerHTML += cardAnimal;
    });
}
// 8. Devolver el formulario en un estado inicial luego de registrar a cada animal. (Opcional)
function inicializaForm(){
    document.getElementById('animal').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('comentarios').value = '';
    $('#preview').empty();
}


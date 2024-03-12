import Animal from './animal.js';

export default class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, rugir) {
        super(nombre, edad, img, comentarios, sonido);
    }

    // métodos “getters” 
    get rugir() {
        return this._rugir;
    }
}
import Animal from './animal.js';

export default class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, gruñir) {
        super(nombre, edad, img, comentarios, sonido);
    }

    // métodos “getters” 
    get gruñir() {
        return this._gruñir;
    }
}
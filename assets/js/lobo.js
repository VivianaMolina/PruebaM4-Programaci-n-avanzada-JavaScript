import Animal from './animal.js';

export default class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, aullar) {
        super(nombre, edad, img, comentarios, sonido);
    }

    // métodos “getters” 
    get aullar() {
        return this._aullar;
    }
}
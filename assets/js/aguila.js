import Animal from './animal.js';

export default class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, chillar) {
        super(nombre, edad, img, comentarios, sonido);
    }

    // métodos “getters” 
    get chillar() {
        return this._chillar;
    }
}
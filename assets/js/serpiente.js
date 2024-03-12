import Animal from './animal.js';

export default class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, sisear) {
        super(nombre, edad, img, comentarios, sonido);
    }

    // métodos “getters” 
    get sisear() {
        return this._sisear;
    }
}
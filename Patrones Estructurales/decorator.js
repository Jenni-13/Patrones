// Clase base que tiene el metodo pegar donde devuelve un mensaje
class Esfera {
    pegar() {
        return "Brillos dorados";
    }
}

// Aqui envuelve mi instancia Esferea 
class DecoradorListon {
    constructor(esfera) { // mi constructor implementa mi metodo pegar 
        this.esfera = esfera;
    }
    pagar() {
        return this.esfera.pegar() + " con un listón rojo";
    }
}

// Uso del patrón Decorator
let miEsfera = new Esfera();
console.log(miEsfera.pegar()); // Imprime: "Brillos"
// Uso del patrón Decorator
let miEsferaDecorada = new DecoradorListon(miEsfera);
console.log(miEsferaDecorada.pegar()); // Imprime: "Liston rojo"


// Mi clase donde defino mi costructo y las propiedades que va tener mi arbol 
class Pino {
    constructor() {
        this.tamano = '';
        this.color = '';
        this.adornos = [];
    }
    mostrar() { // mi metodo mostrar 
        console.log(`Pino  ${this.tamano} de color ${this.color} con adornos : ${this.adornos.join(', ')}`);
    }
}

// En esta clase tengo mis metodos para cada una de mis propiedades 
class PinoBuilder {
    constructor() {
        this.pino = new Pino(); // creo mi nueva instancia 
    }
    setTamano(tamano) {
        this.pino.tamano = tamano; //metodo para tamaño
        return this;//aqui lo devuelvo mi instancia actual
    }
    setColor(color) {
        this.pino.color = color;//metodo para Color 
        return this;
    }
    agregarAdornos(adornos) {
        this.pino.adornos.push(adornos);//metodo para Adornos 
        return this;
    }

    construir() { //Mi metodo para devolver mi objeto Pino 
        return this.pino;
    }
}

const pinoBuilder = new PinoBuilder();//Creo mi instacia para mi objeto Pino 
const miPino = pinoBuilder
    .setTamano('Grande')//y utilizo mis metodos para poner las caracteristicas de mi arbol
    .setColor('Rosa')
    .agregarAdornos('Esferas')
    .agregarAdornos('Luces')
    .agregarAdornos('Estrella')
    .construir();// Aqui obtengo mi objeto Pino 

miPino.mostrar();// Aqui muestro mis propiedades

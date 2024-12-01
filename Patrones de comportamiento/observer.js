// Defino mi clase principal donde tengo mi constructor y tengo un arreglo donde almaceno mis decoradores y otro para adornos
class ArbolDeNavidad {
    constructor() {
        this.decoradores = [];
        this.adornos = [];
    }

    agregarDecorador(decorador) {// Metodo para agregar un decorador a mi arry
        this.decoradores.push(decorador);
    }

    notificarDecoradores() {//Notifica a los demas decoradores y recorre mi array y actualiza 
        this.decoradores.forEach(decorador => decorador.actualizar(this.adornos));
    }

    agregarAdorno(adorno) {// Aqui agrego un adorno a mi array y va a notificar a todos los decoradores 
        this.adornos.push(adorno);
        this.notificarDecoradores(); // Notifica a los decoradores sobre el nuevo adorno
    }
}

class Decorador {// metodo recibe la lista actual de adornos y la imprime en la consola
    actualizar(adornos) {
        console.log(`¡Nuevo adorno añadido! Adornos actuales: ${adornos.join(', ')}`);
    }
}

// Creo mis instancias 
const arbol = new ArbolDeNavidad();
const decorador1 = new Decorador();

arbol.agregarDecorador(decorador1);//Agrego mi decorador 

arbol.agregarAdorno('Estrella'); // Imprime
arbol.agregarAdorno('Bola roja'); // Imprime
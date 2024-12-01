//Mi clase principal
class EstadoLuzNavidad {
    cambiarLuz(luz) {//defino mi metodo  
        throw new Error("Método no implementado");
    }
}
// Mi subclase donde implementa el metodo cambiarluz es decir herencia y cuando lo llama imprime el mensaje
class EstadoRojo extends EstadoLuzNavidad {
    cambiarLuz(luz) {
        console.log("La luz está en ROJO. Apagar.");
        luz.estado = new EstadoVerde(); // Cambia al siguiente estado
    }
}
// Mi subclase donde implementa el metodo cambiarluz es decir herencia y cuando lo llama imprime el mensaje
class EstadoVerde extends EstadoLuzNavidad  {
    cambiarLuz(luz) {
        console.log("La luz esta en verde.");
        luz.estado = new EstadoRojo(); // Cambia al siguiente estado
    }
}
// En esta clase esta mi propiedad esto es decir que aqui va inicializar dmi instancia en este caso comienza en rojo 
class Luz {
    constructor() {
        this.estado = new EstadoRojo(); // Estado inicial
    }

    cambiar() {// En este metodo es para cambiar el estado actual llamando al metodo cambiarLuzz  
        this.estado.cambiarLuz(this);
    }
}
//
const luz= new Luz(); //Creo una nueva instancia 

luz.cambiar(); // "La luz está en ROJO. Apagar."
luz.cambiar(); // "La luz está en VERDE. Avanzar."

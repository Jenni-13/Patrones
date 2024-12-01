// mi clase donde defino mi metodo que es encender 
class comportamientoLuz {
    encender() {
        throw new Error ("No implementarlo");
    }
}
// mi sublcase donde utilizo el metodo encender y los utilizo para definir su comportamiento 
class LuzColores extends comportamientoLuz {
     encender (){
            console.log("Luces de colores");
     }
}
// mi sublcase donde utilizo el metodo encender y los utilizo para definir su comportamiento 
class LuzFija extends comportamientoLuz {
    encender (){
           console.log("Lusz fija ");
    }
}
// Aqui tengo mi propiedad e inicializo con una instancia 
class LuzNavidad {
    constructor (comportamiento) {
        this.comportamiento = comportamiento;
    }
encender(){
    this.comportamiento.encender();
}
}
// creo instancias diferentes y llamo a mi metodo endender 
const luzFija = new LuzNavidad(new LuzFija());
luzFija.encender(); // "La luz está encendida."

const luzDeColores = new LuzNavidad(new LuzColores());
luzDeColores.encender(); // "La luz cambia de color."

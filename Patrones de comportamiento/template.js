//Esta es mi clase principal con mi metodo preparar bebida que tiene distintas propiedades 
class BebidaDePonche {
    prepararBebida() {
        this.hervirAgua();
        this.agregarIngrediente();
        this.verterEnTaza();
    }
// Aqui tengo mi metodo donde imprime un mensaje 
    hervirAgua() {
        console.log("Hirviendo agua...");
    }
// Aqui tengo mi metodo donde imprime un mensaje 
    verterEnTaza() {
        console.log("Vertiendo en la taza...");
    }

    // Este es mi metodo abstracto 
    agregarIngrediente() {
        throw new Error("Método no implementado");
    }
}
//Esta clase va heredar lo que agregarIngredientes que es de la clase bebidaponche 
class AguaConAzucar extends BebidaDePonche {
    agregarIngrediente() {
        console.log("Agregando azúcar...");
    }
}

const bebida = new AguaConAzucar();//creo una instancia  y llamo al mi metodo prepararbebida para llamar lo que es 
bebida.prepararBebida();//heervir, agregaringrediente y verter 

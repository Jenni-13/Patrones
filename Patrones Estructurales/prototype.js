// Creo mi objeto donde tengo mi metodo init para inicializar
const arbolitoPrototype = {
    init(color) {
        this.color = color;
    },
    mostrarDetalle() { //Otro metodo para informacion en este caso el color 
        console.log(`arbol: ${this.color}`);
    },
    clonar() { //Aqui clono lo que es el objeto arbolitoPrototype
        const clon = Object.create(this);
        return clon;
  
    }
};
// se crea el primer arbol con el clon es decir Object.create 
const arbol1 = Object.create(arbolitoPrototype);
arbol1.init('Blanco');

// Mostrar detalles del coche original
arbol1.mostrarDetalle();

// Clonar el arbol original
const arbol2 = arbol1.clonar();
arbol2.init('Verde');
// Mostrar detalles del arbol clonado
arbol2.mostrarDetalle(); 
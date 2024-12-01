
//Creo una clase que verifica que si existe una instancia, si no hay creo una
class DecorarArbolito {
    static instance  = null; // aqui alamceno mi instancia 
    constructor () {
        if (DecorarArbolito.instance){
            return DecorarArbolito.instance; //Lo retorna instancia existente 
        }
        DecorarArbolito.instance = this;
    }
    //mi metodo decorador de arboles
    decorar () {
        console.log("Decorar Arbolito de Navidad");
    }
}

//Primero creo una instancia, donde llamo a mi metodo decorar
const instance1 = new DecorarArbolito();
instance1.decorar();
//Creo  la segunda instancia y vuelvo a llamar al metodo decorar pero en este caso se verifica que ya existe una y devuelve la primera insatnacia 
const instance2 = new DecorarArbolito();
instance2.decorar();
// Verifica si son las mismas instancias y si son las mismas 
console.log (instance1 === instance2);
//Mi clase base y mi metodo celebrar puede ser sobrescrito
class Navidad {
    celebrar () {
        throw new Error ("implementalo")
    }
}
//Mi subclase, aqui tomo el metodo celebrar de mi clase base y devuelvo un mensaje 
class Decoracion extends Navidad {
    celebrar() {
        return "Decorar el arbolito";
    }
}
// Aqui es donde va verificar que tipo de celebracion es,  en caso de que sea decoracion va a devolver mi instacia Decoración
// En caso contrario devuelve un error
class NavidadFactory {
    static crearCelebracion(tipo){
        if (tipo == 'decoracion'){
            return new Decoracion();
        }else {
            throw new Error ("Celebracion no valida");  
        }
        }
    }
//En esta parte lo crea mi instacia, es decir si decoracion es igual a NavidadFactory va crear la celebración 
const decoracion = NavidadFactory.crearCelebracion('decoracion');
console.log(decoracion.celebrar());
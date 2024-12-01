//Este es mi clase abstracto que tiene el metodo envolver 
class Regalo {
    envolver () {
        throw new Error ("implementalo")
    }
}
//Este es  mi subclase donde implementa el metodo envolver de mi clase principal y devuelvo un mensaje
class RegaloNavidad extends Regalo {
    envolver () {
        return "La envoltura roja con verde y liston rosa";
    }
}
//Este es  mi subclase donde implementa  el metodo envolver de mi clase principal y devuelvo un mensaje
class RegaloAnioNuevo extends Regalo  {
    envolver () {
        return "La envoltura roja con azul y liston morado";
    }
}
//Creo otra clase abtracta pero con el metodo crearRegalo
class RegaloFactory {
    crearRegalo(){                             
        throw new Error ("Implementalo");
    }
}
// Hago una subclase para fabricar navidad utilizando el metodo de CrearRegalo de mi clase abtracta 
class RegaloNavidadFactory extends RegaloFactory {
    crearRegalo(){
        return new RegaloNavidad();
    }
}
// Hago una subclase paraFabricar  Año nuevo utilizando el metodo de CrearRegalo de mi clase abtracta 
class RegaloAnioNuevoFactory extends RegaloFactory {
    crearRegalo(){
        return new RegaloAnioNuevo();
    }
}
//Realizo la funcion donde se envuelve el regalo 
function envolverRegalo (factory){
    const regalo = factory.crearRegalo();
    console.log(regalo.envolver());
}

console.log("Envolver para Año nuevo");
envolverRegalo(new RegaloAnioNuevoFactory());

console.log("Envolver para navidad ");
envolverRegalo(new RegaloNavidadFactory());


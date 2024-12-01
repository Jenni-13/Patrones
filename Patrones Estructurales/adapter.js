//Clase principal
class Target {
    enviarMensaje() {
        return "Mensaje de Navidad enviado.";
    }
}

// Clase que tiene la funcionalidad que queremos adaptar
class ServicioDeMensajes {
    enviarMensajeNavideño() {
        return "¡Feliz Navidad desde el Servicio de Mensajes!";
    }
}

// Adapter que adapta ServicioDeMensajes a la interfaz Target
class Adapter extends Target {
    constructor(servicio) {
        super();
        this.servicio = servicio;
    }
    
    enviarMensaje() {
        return this.servicio.enviarMensajeNavideño();
    }
}

// Uso del patrón 
const servicioDeMensajes = new ServicioDeMensajes();
const adapter = new Adapter(servicioDeMensajes);

console.log(adapter.enviarMensaje()); 
export class Cliente 
{
    //atributos o propiedades de la clase
    nombreCliente;
    dniCliente;
    rutCliente;//RFC 
    #clave;   
    
    constructor(nombreCliente,dniCliente,rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave){    this.#clave = clave;    }
    autenticable(clave){    return clave == this.#clave;    }
}


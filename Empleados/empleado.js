export class empleado
{
    #dni;
    #nombre;
    #salario;
    #clave;

    constructor(nombre, dni, salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave(clave){    this.#clave = clave;    }
    autenticable(clave){ return clave == this.#clave;    }

    verBonificacion(){  return this.#salario;}
    _verBonificacion(bono){
        return this.#salario + this.#salario*(bono/100);
    }
}
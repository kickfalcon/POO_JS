import { Cliente } from "./cliente.js";

export class cuentaCorriente
{
    //# convierte al atributo en privado y lo oculta
    //_ convierte al atributo privado y lo muestra 
    agencia;
    numero;
    static cantidadCuentas = 0;//para todas las cuentas y no se puede acceder con la palabra 'this' y requiero usar el nombre de la clase
    #cliente;
    #saldo; 

    set setCliente(valor){
        if(valor instanceof Cliente)
            this.#cliente = valor;      
    }
    get getCliente(){  return this.#cliente;   }

    //el constructor permite inicializar la variable
    constructor(agencia,cliente,numero){
        this.setCliente=cliente;//se debe usar como variable y no como funcion
        //this.#cliente=cliente; //no es un dato primitivo (boolean, string, number), es un objeto de otra cuenta
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        cuentaCorriente.cantidadCuentas++;        
    }
    //metodos son los comportamientos o lo que hace
    depositoCuenta(valor){ //parametro por valor 
        if(valor > 0){  this.#saldo += valor;   return this.#saldo;     }
    } //this permite seleccionar el objeto actual
     retiroCuenta(valor){ //parametro por valor
        if(valor <= this.#saldo){    this.#saldo -= valor; return this.#saldo   }
        else{   console.log('Saldo insuficiente');  }            
    }
    transferirParaCuenta(valor,cuentaDestino){ //transferirParaCuenta(parametro por valor, parametro por referencia)
        this.retiroCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
        valor = 200;
    }
    verSaldo(){ return this.#saldo; }
}
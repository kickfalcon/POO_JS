export class cuenta{
    agencia;
    numero;
    #cliente;
    #saldo; 
    
    //clase abstracta es aquella a la que no se debe accerder directamente, no se puede instanciar pero si extender
    //nos permite encapsular el funcionamiento
    constructor(cliente, numero, agencia, saldo){
        if(this.constructor == cuenta){     throw new Error('No se deben instanciar objetos de la clase Cuenta');    }//detiene el funcionamiento del codigo
        this.agencia = agencia;
        this.numero = numero;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set setCliente(valor){
        if(valor instanceof Cliente)
            this.#cliente = valor;      
    }
    get getCliente(){  return this.#cliente;   }
    
    depositoCuenta(valor){ 
        if(valor > 0){  this.#saldo += valor;   return this.#saldo;     }
    }

    retiroCuenta(valor){    throw new Error('Debe implementar el metodo retiroCuenta en su clase');     }//metodo abstracto: tiene definicion pero no se implementa, es decir, no hace nada

    _retiroCuenta(valor, comision){//metodo privado
        valor = valor * (1+comision/100);
        if(valor <= this.#saldo){    this.#saldo -= valor; return this.#saldo   }
        else{   console.log('Saldo insuficiente');  }            
    }

    transferirParaCuenta(valor,cuentaDestino){ 
        this.retiroCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
        valor = 200;
    }

    verSaldo(){ return this.#saldo; }
}
import { cuenta } from "./cuenta.js";

export class cuentaCorriente extends cuenta
{
    static cantidadCuentas = 0;
    constructor(agencia,cliente,numero){    
        super(cliente,numero,agencia,0);//permite tener acceso a la clase padre desde la clase hijo
        cuentaCorriente.cantidadCuentas++;  
    }
    /*prueba(){   
        //super.prueba();//accede al metodo padre
        console.log('Metodo hijo'); //sobreescribimos el metodo
    }*/
    retiroCuenta(valor){    super._retiroCuenta(valor,5);    }
}
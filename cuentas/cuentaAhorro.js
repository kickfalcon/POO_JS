import { cuenta } from "./cuenta.js";

export class cuentaAhorro extends cuenta
{
    constructor(agencia,cliente,numero,saldo){  super(cliente,numero,agencia,saldo);  }
    retiroCuenta(valor){  super._retiroCuenta(valor,2);     }//acceso a metodo privado    
}
import { cuenta } from "./cuenta.js";

export class cuentaNomina extends cuenta
{
    constructor(agencia,cliente,numero,saldo){  super(cliente,numero,agencia,saldo);  }
    retiroCuenta(valor){    super._retiroCuenta(valor,1);      }

}
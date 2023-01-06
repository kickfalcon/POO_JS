import { empleado } from "./empleado.js";
export class director extends empleado
{   
    constructor(nombre, dni, salario){   super(nombre,dni,salario);  }
    verBonificacion(){
        const bono = 10;
        return super._verBonificacion(bono);
    }
}
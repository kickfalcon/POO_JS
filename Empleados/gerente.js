import { empleado } from "./empleado.js";
export class gerente extends empleado
{
    constructor(nombre, dni, salario){   super(nombre,dni,salario);  }
    verBonificacion(){
        const bono=5;
        return super._verBonificacion(bono);
    }
}
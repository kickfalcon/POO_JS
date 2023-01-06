import {Cliente} from './cliente.js';
import { cuenta } from './cuentas/cuenta.js'; 
import { cuentaCorriente } from './cuentas/cuentaCorriente.js';
import { cuentaAhorro } from './cuentas/cuentaAhorro.js';
import { cuentaNomina } from './cuentas/cuentaNomina.js';
import { empleado} from './Empleados/empleado.js';
import { director } from './Empleados/director.js';
import { gerente} from './Empleados/gerente.js';
import { sistemaAutenticacion } from './sistemaAutenticacion.js';

const client = new Cliente('Leonardo','123234','123224');
client.asignarClave('1111');
console.log(sistemaAutenticacion.login(client,'1111'));

/*const cliente2 = new Cliente('Maria','123235','123225');
//const cuentaSimple = new cuenta(client,'998','988',0);//intenta crear objeto de la clase 'cuenta'*/
const employee = new empleado('Juan Perez','1234343',10000);
employee.asignarClave('12345');
console.log(sistemaAutenticacion.login(employee,'12345'));

/*const manager = new gerente('Pedro Rivas','232344',12000);
manager.asignarClave('6556');
console.log(sistemaAutenticacion.login(manager,'656'));

const ceo = new director('Elena Moreno','235424',15000);*/

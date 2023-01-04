//clase es el molde
//instancia es el objeto que se crea en una clase
//encapsulamiento: solo muestra lo que necesitamos y encierra lo que no necesitamos

//importar la clase
import {cuentaCorriente} from './cuentaCorriente.js';
import {Cliente} from './cliente.js';

//creamos las instancias
const client = new Cliente('Leonardo','123234','123224');
const cliente2 = new Cliente('Maria','123235','123225');
const cuentaLeonardo = new cuentaCorriente('1',client,'001');
const cuentaMaria = new cuentaCorriente('002',cliente2,'2');

let saldo = cuentaLeonardo.verSaldo();
saldo=cuentaLeonardo.depositoCuenta(150);
console.log(cuentaMaria.getCliente);
console.log(cuentaLeonardo.getCliente);
console.log(cuentaCorriente.cantidadCuentas);


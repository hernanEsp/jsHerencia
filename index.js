/*Importación de clases*/
/*
import { Cuenta } from './cuentas/cuenta.js';
import { CuentaCorriente } from './cuentas/CuentaCorriente.js';
import { CuentaAhorro } from './cuentas/cuentaAhorro.js';*/
import { Cliente } from './Cliente.js'
import { Empleado } from './empleados/empleado.js';
import { Gerente } from './empleados/gerente.js';
import { Director } from './empleados/director.js';
import { SistemaAutenticacion } from './sistemaAutenticacion.js';
 
/* Finalizacion de importacion de clases */

const empleado1 = new Empleado('Hernan Espinola', '12344432', 1000);

const cliente = new Cliente('Nacho Espinola', '37985043', '009');
cliente.setClave('12345');
empleado1.setClave('12345');
console.log(SistemaAutenticacion.login(empleado1, '12345'));
console.log(SistemaAutenticacion.login(cliente, '12345'));
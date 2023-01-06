import {Cuenta} from './cuenta.js';

export class CuentaCorriente extends Cuenta

{
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        return super._retirarDeCuenta(valor, 5);
    }
}
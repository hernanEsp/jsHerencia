import { Cuenta } from './cuenta.js';

export class CuentaAhorro extends Cuenta
{
    constructor(cliente, numero, agencia){
        super(cliente, numero, agencia, 0);
    }

    retirarDeCuenta(valor) {
        return super._retirarDeCuenta(valor, 2);
    }
}
export class Cuenta{
    #cliente;
    numero;
    agencia;
    #saldo;

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente, numero, agencia, saldo) {
        if( this.constructor == Cuenta){
            throw new Error('No se deben instanciar Objetos de la clase Cuenta');
        }
        this.#cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        return _retirarDeCuenta(valor, 0);
    }

    _retirarDeCuenta(valor, comision) {
        valor = valor * comision/100;
        this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}
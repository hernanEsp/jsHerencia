export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    autenticable;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    setClave(clave){
        this.#clave = clave;
    }

    get clave(){
        return this.#clave;
    }
}
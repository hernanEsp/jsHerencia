import { Empleado } from "./empleado.js";

export class Gerente extends Empleado{
    constructor (nombre, dni, salario){
        super(nombre, dni, salario);
    }

    verBonificacion(bono){
        return super._verBonificacion(5);
    }
}
export class SistemaAutenticacion{
    
    static login(usuario, clave){
        return Reflect.has(usuario, "autenticable");
    }
}
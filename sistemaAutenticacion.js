export class sistemaAutenticacion
{
    static login(usuario,clave){
        if("autenticable" in usuario 
            && usuario.autenticable instanceof Function) //verificamos si existe el atributo o metodo dentro de la clase y que sea un metodo
            return usuario.autenticable(clave);
        else
            return false;     
    }//se hace la implementacion a nivel de metodo y no de atributo, por lo que es mas segura
    //una funcion estatica solo se crea una vez
}
/*
 tipado
 O.O.P
 herencia/interfaces/clases abstractas
 generics
*/

/*
    - polimorfismo
    - herencia
    - encapsulamiento
    - abstracción
*/
export class Articulo {
    constructor(private id:number,private titulo:string) {
    }
}

export abstract class Buscador {    //???? new Buscador()??
    private clave: string;
    private resultados: Articulo[];
    constructor() {

    }   
    public abstract buscar(): void;//asume que es de tipo any
}

export class BuscadorPorTitulo extends Buscador implements IOrdenable<Articulo> {

    ordenar(elemntos: Articulo[]): void {
       
    }

    public buscar(): void {
        
    }
}


export interface Ordenable {
    ordenar(elementos: string[]): void;
}

export interface IOrdenable<T> {
    ordenar(elemntos: T[]): void;
}

export class OrdenASC implements IOrdenable<number> {
    ordenar(elemntos: number[]): void {
       
    }
}

export class OrdenObjetos implements IOrdenable<string> {
    ordenar(elemntos: string[]): void {
    }
}

//ejecutar!!!!
//ts: let,const
const buscadpor:BuscadorPorTitulo  = new BuscadorPorTitulo();//instancia de un objeto de la clase BuscadorPorTitulo

buscadpor.buscar();

buscadpor.ordenar([]);
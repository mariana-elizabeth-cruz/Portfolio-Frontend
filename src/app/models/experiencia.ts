export class Experiencia {
    id? : number;
    nombreExp: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;


    constructor(nombreExp: string, descripcion: string, fechaInicio: string, fechaFin: string) {
        this.nombreExp = nombreExp;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}

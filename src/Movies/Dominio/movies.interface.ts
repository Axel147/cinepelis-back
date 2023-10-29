import { Document } from "mongoose";

export interface IMovie extends Document{
    titulo: String,
    descripcion: String,
    portada: String,
    trailer: String,
    clasificacion: String,
    genero: String,
    duracion: String,
    elenco: String,
    director: String
}
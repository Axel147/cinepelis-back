import { Document } from "mongoose";

export interface ICandy extends Document{
    titulo: String,
    contenido: String,
    portada: String,
    precio: String,
}
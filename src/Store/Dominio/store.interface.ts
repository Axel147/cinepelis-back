import { Document } from "mongoose";

export interface IStore extends Document{
    titulo: String,
    contenido: String,
    portada: String,
    precio: String,
}
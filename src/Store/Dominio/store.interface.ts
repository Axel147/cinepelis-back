import { Document } from "mongoose";

export interface IStore extends Document{
    contenido: String,
    portada: String,
    precio: String,
}
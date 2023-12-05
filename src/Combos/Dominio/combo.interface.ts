import { Document } from "mongoose";

export interface ICombo extends Document{
    contenido: String,
    portada: String,
    precio: String,
}
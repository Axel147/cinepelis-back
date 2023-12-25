import mongoose, { Schema } from 'mongoose';
import { ICandy } from './candy.interface';

const CandySchema: Schema = new Schema({
  titulo: { type: String, require: true },
  contenido: { type: String, required: true },
  portada: { type: String, required: false },
  precio: { type: String, required: false },
});

export const Candy = mongoose.model<ICandy>('Candy', CandySchema);
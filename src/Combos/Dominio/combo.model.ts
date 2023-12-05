import mongoose, { Schema } from 'mongoose';
import { ICombo } from './combo.interface';

const ComboSchema: Schema = new Schema({
  contenido: { type: String, required: true },
  portada: { type: String, required: false },
  precio: { type: String, required: false },
});

export const Combo = mongoose.model<ICombo>('Combo', ComboSchema);
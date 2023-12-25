import mongoose, { Schema } from 'mongoose';
import { IStore } from './store.interface';

const StoreSchema: Schema = new Schema({
  contenido: { type: String, required: true },
  portada: { type: String, required: false },
  precio: { type: String, required: false },
});

export const Store = mongoose.model<IStore>('Store', StoreSchema);
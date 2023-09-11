import mongoose, { Schema} from 'mongoose';
import { IMovie } from '../interfaces/movies.interface';

const MovieSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: false },
  portada: { type: String, required: false },
  trailer: { type: String, required: false },
  clasificacion: { type: String, required: false },
  genero: { type: String, required: false },
  duracion: { type: String, required: false },
  elenco: { type: String, required: false },
  director: { type: String, required: false },

});

export const Movie = mongoose.model<IMovie>('Movie', MovieSchema);
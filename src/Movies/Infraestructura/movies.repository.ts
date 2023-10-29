import { Model } from 'mongoose';
import { IMovie } from "../Dominio/movies.interface"

export class MovieRepository {
  constructor(private readonly movieModel: Model<IMovie>) {}
  

  async findById(id: string): Promise<IMovie | null> {
    return this.movieModel.findById(id).exec();
  }

  async findAll(): Promise<IMovie[]> {
    return this.movieModel.find().exec();
  }

  async create(movie: IMovie): Promise<IMovie> {
    return this.movieModel.create(movie);
  }

  async update(id: string, movie: Partial<IMovie>): Promise<IMovie | null> {
    return this.movieModel.findByIdAndUpdate(id, movie, { new: true }).exec();
  }

  async delete(id: string): Promise<IMovie | null> {
    return this.movieModel.findByIdAndDelete(id).exec();
  }
}

import { IMovie } from "../Dominio/movies.interface"

export class MovieRepository {

  constructor(private readonly movieModel: Model<IMovie>) {}

  async findById(id: string): Promise<IMovie | null> {
    return 
  }

  async findAll(): Promise<IMovie[]> {
    return 
  }

  async create(movie: IMovie): Promise<IMovie> {
    return 
  }

  async update(id: string, movie: Partial<IMovie>): Promise<IMovie | null> {
    return 
  }

  async delete(id: string): Promise<IMovie | null> {
    return 
  }
}

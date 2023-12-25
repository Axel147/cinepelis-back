import { Model } from 'mongoose';
import { ICandy } from '../Dominio/candy.interface';

export class CandyRepository {
  constructor(private readonly comboModel: Model<ICandy>) {}
  
  async findById(id: string): Promise<ICandy | null> {
    return this.comboModel.findById(id).exec();
  }

  async findByTitle(title: string): Promise<ICandy | null> {
    return ; //this.comboModel.findOne(title);
  }

  async findAll(): Promise<ICandy[]> {
    return this.comboModel.find().exec();
  }

  async create(movie: ICandy): Promise<ICandy> {
    return this.comboModel.create(movie);
  }

  async update(id: string, movie: Partial<ICandy>): Promise<ICandy | null> {
    return this.comboModel.findByIdAndUpdate(id, movie, { new: true }).exec();
  }

  async delete(id: string): Promise<ICandy | null> {
    return this.comboModel.findByIdAndDelete(id).exec();
  }
}

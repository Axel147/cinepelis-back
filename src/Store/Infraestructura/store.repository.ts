import { Model } from 'mongoose';
import { IStore } from '../Dominio/store.interface';

export class StoreRepository {
  constructor(private readonly storeModel: Model<IStore>) {}
  
  async findById(id: string): Promise<IStore | null> {
    return this.storeModel.findById(id).exec();
  }

  async findByTitle(title: string): Promise<IStore | null> {
    return ; //this.comboModel.findOne(title);
  }

  async findAll(): Promise<IStore[]> {
    return this.storeModel.find().exec();
  }

  async create(movie: IStore): Promise<IStore> {
    return this.storeModel.create(movie);
  }

  async update(id: string, movie: Partial<IStore>): Promise<IStore | null> {
    return this.storeModel.findByIdAndUpdate(id, movie, { new: true }).exec();
  }

  async delete(id: string): Promise<IStore | null> {
    return this.storeModel.findByIdAndDelete(id).exec();
  }
}

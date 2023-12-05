import { Model } from 'mongoose';
import { ICombo } from '../Dominio/combo.interface';

export class ComboRepository {
  constructor(private readonly comboModel: Model<ICombo>) {}
  

  async findById(id: string): Promise<ICombo | null> {
    return this.comboModel.findById(id).exec();
  }

  async findByTitle(title: string): Promise<ICombo | null> {
    return ; //this.comboModel.findOne(title);
  }

  async findAll(): Promise<ICombo[]> {
    return this.comboModel.find().exec();
  }

  async create(movie: ICombo): Promise<ICombo> {
    return this.comboModel.create(movie);
  }

  async update(id: string, movie: Partial<ICombo>): Promise<ICombo | null> {
    return this.comboModel.findByIdAndUpdate(id, movie, { new: true }).exec();
  }

  async delete(id: string): Promise<ICombo | null> {
    return this.comboModel.findByIdAndDelete(id).exec();
  }
}

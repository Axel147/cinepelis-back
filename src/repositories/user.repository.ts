import { Model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export class UserRepository{
    constructor(private readonly userModel: Model<IUser>){}
    
    async create(user: IUser): Promise<IUser>{
        return this.userModel.create(user);
    }

    async findAll(): Promise<IUser[]>{
        return this.userModel.find().exec();
    }

    async update(id: string, user: Partial<IUser>): Promise<IUser | null>{
        return this.userModel.findByIdAndUpdate(id, user, {new: true}).exec();
    }
}
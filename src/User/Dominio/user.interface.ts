import { Document } from 'mongoose';

export interface IUser extends Document{
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
    birthdate: Date;
    gender: string;
    phone: number;
    usual_complex: string;
}
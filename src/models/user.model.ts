import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema: Schema = new Schema({
    id: {type: Number, required: false},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    birthdate: {type: Date, required: true},
    gender: {type: String, required: false},
    phone: {type: Number, required: true},
    usual_complex: {type: String, required: true},
});

export const User = mongoose.model<IUser>('User', UserSchema);
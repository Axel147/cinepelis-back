import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

const bcrypt = require('bcrypt');

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = new UserRepository(User);
    try {
      const user = await userRepository.findAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  static userByEmail = async (req: Request, res: Response) => {
    const { email } = req.body;

    if(!email){
        return res.status(400).json({message: 'Debes proporcionar un email'});
    }

    /*const usuariosFiltrados = this.getAll().filter((usuario))*/


  }

  static createUser = async (req: Request, res: Response) => {
    const {
      name,
      lastname,
      email,
      password,
      birthdate,
      gender,
      phone,
      usual_complex,
    } = req.body;

    const userRepository = new UserRepository(User);
    const user = new User();
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    /*
    function compararUsuario(email){
        if()
    }
*/
    try {
        user.name = name,
        user.lastname = lastname,
        user.email = email,
        user.password = hashedPassword,
        user.birthdate = birthdate,
        user.gender = gender,
        user.phone = phone,
        user.usual_complex = usual_complex,

        await userRepository.create(user);
        return res.status(201).json({message: "Usuario creado"});
    } catch (error){
        return res.status(500).json(error);
    }
  };

  static updateUser = async (req: Request, res: Response) => {}
}

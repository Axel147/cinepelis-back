import { Request, Response } from "express";
import { Candy } from "../Dominio/candy.model"
import { CandyRepository } from "./candy.repository";

export class CandyController {

    static getAll = async (req: Request, res: Response) => {
        const candyRepository = new CandyRepository(Candy);
        try {
            const candys = await candyRepository.findAll(); 
            res.status(200).json(candys);
        } catch (error) {
            res.status(500).json({message: error});
        }
    }

    static addCandy = async (req: Request, res: Response) => {
        const { contenido, portada, precio } = req.body;
        const candyRepository = new CandyRepository(Candy);
        const candy = new Candy();
        try {
            candy.contenido = contenido,
            candy.portada = portada,
            candy.precio = precio

            await candyRepository.create(candy);
            return res.status(201).json({"respuesta": "Producto de candy creado"});
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static updateCandy = async (req: Request, res: Response) => {
        
    }

    static deleteCandy = async (req: Request, res: Response) => {
        
    }

}
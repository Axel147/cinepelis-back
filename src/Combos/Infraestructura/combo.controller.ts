import { Request, Response } from "express";
import { Combo } from "../Dominio/combo.model"
import { ComboRepository } from "./combo.repository";

export class ComboController {

    static getAll = async (req: Request, res: Response) => {
        const comboRepository = new ComboRepository(Combo);
        try {
            const combos = await comboRepository.findAll(); 
            res.status(200).json(combos);
        } catch (error) {
            res.status(500).json({message: error});
        }
    }

    static addCombo = async (req: Request, res: Response) => {
        const { contenido, portada, precio } = req.body;
        const comboRepository = new ComboRepository(Combo);
        const combo = new Combo();
        try {
            combo.contenido = contenido,
            combo.portada = portada,
            combo.precio = precio

            await comboRepository.create(combo);
            return res.status(201).json({"respuesta": "Combo creado"});
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static updateCombo = async (req: Request, res: Response) => {
        
    }

    static deleteCombo = async (req: Request, res: Response) => {
        
    }

}
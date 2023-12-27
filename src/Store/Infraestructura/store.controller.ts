import { Request, Response } from "express";
import { Store } from "../Dominio/store.model"
import { StoreRepository } from "./store.repository";

export class StoreController {

    static getAll = async (req: Request, res: Response) => {
        const storeRepository = new StoreRepository(Store);
        try {
            const candys = await storeRepository.findAll(); 
            res.status(200).json(candys);
        } catch (error) {
            res.status(500).json({message: error});
        }
    }

    static addStore = async (req: Request, res: Response) => {
        const { titulo, contenido, portada, precio } = req.body;
        const storeRepository = new StoreRepository(Store);
        const store = new Store();
        try {
            store.titulo = titulo,
            store.contenido = contenido,
            store.portada = portada,
            store.precio = precio

            await storeRepository.create(store);
            return res.status(201).json({"respuesta": "Producto de store creado"});
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static updateStore = async (req: Request, res: Response) => {
        
    }

    static deleteStore = async (req: Request, res: Response) => {
        
    }

}
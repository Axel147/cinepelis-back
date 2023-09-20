import { Request, Response } from "express";
//import Movie from "../entity/Movie";
import { Movie } from "../models/movies.model"
import { MovieRepository } from "../repositories/movies.repository";

export class MovieController {

    static getAll = async (req: Request, res: Response) => {
        const movieRepository = new MovieRepository(Movie);
        try {
            const movies = await movieRepository.findAll(); 
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json({message: error});
        }
    }

    static addMovie = async (req: Request, res: Response) => {
        const { titulo, descripcion, portada, trailer, clasificacion, genero, duracion, elenco, director } = req.body;
        const movieRepository = new MovieRepository(Movie);
        const movie = new Movie();
        try {
            movie.titulo = titulo,
            movie.descripcion = descripcion,
            movie.portada = portada,
            movie.trailer = trailer,
            movie.clasificacion = clasificacion,
            movie.genero = genero,
            movie.duracion = duracion,
            movie.elenco = elenco,
            movie.director = director

            await movieRepository.create(movie);
            return res.status(201).json({"respuesta": "pelicula creada"});
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static pruebaBack = async (req: Request, res: Response) => {
        console.log("funciono el llamado a back")
    }

    static updateMovie = async (req: Request, res: Response) => {
        
    }

    static deleteMovie = async (req: Request, res: Response) => {
        
    }

}
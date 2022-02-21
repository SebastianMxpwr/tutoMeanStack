import {Request, Response} from 'express'
import multer from 'multer'
import PhotoM from '../models/photoM'

const cretePhoto = async (req: Request, res: Response): Promise<Response> => {
    
    
    const {title, description} = req.body    

    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file?.path
    }

    
    return res.send('Ha sido subida')

}
const getPhotos = async (req: Request, res: Response): Promise<Response> => {
    return res.send()

}

export default {
    getPhotos,
    cretePhoto
}
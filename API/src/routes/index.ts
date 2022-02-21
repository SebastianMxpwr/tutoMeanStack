import express  from "express";
import PhotoController from "../controllers/photoC"
import multer from "../libs/multer";
const router = express()


router.get('/Photos', PhotoController.getPhotos )
router.post('/Photos',multer.single('image'), PhotoController.cretePhoto )

export default router
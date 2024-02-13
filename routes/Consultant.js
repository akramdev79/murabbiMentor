// routes/Customer.js
import express from 'express';
import upload from '../middleware/uploadImag.js'
import {verifyToken} from '../middleware/authentication.js'

const consultantRouter = express.Router();

import { registerConsultant, deleteConsultants, getConsultant, updateConsultant } from '../controllers/ConsultantController.js'
import { getConsultants } from '../controllers/ConsultantController.js'

consultantRouter.get('/get-consultants', getConsultants);
consultantRouter.post('/create-consultant', upload.single('image'), registerConsultant);
consultantRouter.post('/update-consultant/:id', upload.single('image'),updateConsultant);
consultantRouter.delete('/delete-consultant/:id', deleteConsultants);
consultantRouter.get('/get-consultant/:id',getConsultant);

export default consultantRouter

import { Router } from 'express';
import { createAdvert , updateAdvert , deleteAdvert, AddComment } from '../../controllers/adverts';
import { AdmRole } from '../../middlewares/Roles';

export const advert = Router();

advert.post('/new',createAdvert);
advert.put('/:id',updateAdvert);
advert.put('/add/comment/:id',AddComment);
advert.delete('/:id',AdmRole,deleteAdvert);
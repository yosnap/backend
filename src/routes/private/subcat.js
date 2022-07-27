import { Router } from 'express';
import { createSubCategory , updateSubCategory , deleteSubCategory } from '../../controllers/subcategories';
import { AdmRole , DevRole } from '../../middlewares/Roles';

export const scat = Router();

scat.post('/new',createSubCategory);
scat.put('/:id',AdmRole,updateSubCategory);
scat.delete('/:id',DevRole,deleteSubCategory);
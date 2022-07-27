import { Router } from 'express';
import { createCategory , updateCategory , deleteCategory } from '../../controllers/categories';
import { DevRole } from '../../middlewares/Roles';

export const cat = Router();

cat.post('/new',DevRole,createCategory);
cat.put('/:id',DevRole,updateCategory);
cat.delete('/:id',DevRole,deleteCategory);